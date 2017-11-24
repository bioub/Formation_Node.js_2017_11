const notFound = require('../../middlewares/not-found');
const expect = require('chai').expect;

describe('notFound', () => {

  it('should contains status code 404', () => {

    const req = {};
    const res = {
      json() { }
    };

    notFound(req, res);

    expect(res.statusCode).to.equal(404);

  });

  it('should call res.json with Not Found if no res.msg', () => {

    const req = {};
    const res = {
      json(obj) {
        expect(obj).to.be.instanceOf(Object);
        expect(obj.msg).to.equal('Not Found');
      }
    };

    notFound(req, res);

  });

  it('should call res.json with res.msg', () => {

    const req = {
      msg: 'Contact Not Found'
    };
    const res = {
      json(obj) {
        expect(obj).to.be.instanceOf(Object);
        expect(obj.msg).to.equal('Contact Not Found');
      }
    };

    notFound(req, res);

  });

});
