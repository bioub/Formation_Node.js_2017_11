const contactCtrl = require('../../controllers/contact');
const expect = require('chai').expect;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = Promise;

describe('contact controller', () => {

  describe('show', () => {

    beforeEach(() => {
      // si mongo indispensable ici mongoimport
      // pour remettre un jeu de tests propre
    })

    it('should called contactService.getById', (done) => {

      const req = {
        params: {
          id: '5a181be56c1667257cb4c359'
        }
      };
      const res = {
        json(contact) {
          expect(contact.prenom).to.equal('Mark');
          done();
        }
      };
      const next = (err) => {};

      contactCtrl.show(req, res, next);

    });

  });

});
