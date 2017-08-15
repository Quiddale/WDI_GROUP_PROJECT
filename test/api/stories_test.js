require('../spec_helper');

//Now we're testing out storyIndex api route --> /api/stories
describe('Stories Controller Test', () => {
  const User = require('../../models/user');
  const Story = require('../../models/story');

  describe('GET /api/stories', () => {

    beforeEach(done => {
      User.collection.drop();
      Story.collection.drop();
      done();
    });

    beforeEach(done => {
      User.create({
        username: 'dragana',
        email: 'd@d.com',
        password: 'pass',
        passwordConfirmation: 'pass'
      })
      .then(() => {
        return Story.create({
          title: 'A testing title',
          genre: 'Action',
          rules: {
            start: 'q',
            contain: 'd'
          },
          image: 'fake-img.png',
          authorContribution: 'Some text',
          createdBy: '5992ce6129a0eb73430f9b5c',
          contributions: []
        });
      })
      .then(() => done())
      .catch(done);
    });

    it('should return a 200 response', done => {
      api
        .get('/api/stories')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return an array of stories', function(done) {
      api
        .get('/api/stories')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of story objects', function(done) {
      api
        .get('/api/stories')
        .set('Accept', 'application/json')
        .end((err, res) => {
          console.log(res.body);
          expect(res.body)
            .to.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '_id',
              '__v',
              'title',
              'genre',
              'rules',
              'image',
              'authorContribution',
              'createdBy',
              'contributions'
            ]);
          done();
        });
    });

  });
});
