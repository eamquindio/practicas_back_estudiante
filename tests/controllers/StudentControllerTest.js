const chai = require('chai');
const chaiHttp = require('chai-http');
const Helper = require('../Helper');

chai.use(chaiHttp);

describe('Student CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });
});
