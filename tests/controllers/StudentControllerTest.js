const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const StudentRepository = require('../../app/repositories/StudentRepository');
const Helper = require('../Helper');

const API = '/api/estudiantes-ms/students';
chai.use(chaiHttp);

describe('Student CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('find student by name test', async () => {
    await StudentRepository.create([{
      id: '1',
      namee: 'mauricio',
      lastname: 'ruiz',
      cellphone: '328732',
      mail: 'mruiz5363',
      code: '23452',
      faculty: 'ingenieria',
      programm: 'software',
      semester: '2',
    },
    {
      id: '2',
      namee: 'manuel',
      lastname: 'echeverry',
      cellphone: '754674',
      mail: 'xternux',
      code: '65342',
      faculty: 'administraccion',
      programm: 'negocios',
      semester: '5',
    }]);

    return chai
      .request(app)
      .get(`${API}/find_by_name?faculty=ingenieria&&programm=negocios&&semester=7`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body[0], {
          id: '1',
          namee: 'mauricio',
          lastname: 'ruiz',
          cellphone: '328732',
          mail: 'mruiz5363',
          code: '23452',
          faculty: 'ingenieria',
          programm: 'software',
          semester: '2',

        });
      });
  });

  it('find student by name empty test', async () => chai
    .request(app)
    .get(`${API}/find_by_name?faculty= &&programm= &&semester= `)
    .then(async (response) => {
      assert.equal(response.status, 204);
    }));
});

