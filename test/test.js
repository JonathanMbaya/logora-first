const app = require('../index.js');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('POST /api/moderation/predict', () => {
  it('should return a prediction', async () => {
    const res = await chai.request(app)
      .post('/api/moderation/predict')
      .send({ text: 'Sample text', language: 'en' });

    expect(res).to.have.status(200);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('prediction');
  });
});
