const request = require('supertest');
const expect = require('expect');

var app  = require('./server').app;

//server
describe('Server', () => {
    describe('Get /', () => {
        it('should return hello world rep', (done) => {
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found'
                })
            })
            .end(done);
        });
    });
    
    describe('Get /users', () => {
        //Make a new test
        //assert 200 
        //toInclude that I exist in users array
        it('should find me', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'Jeremy',
                    age: 40
                })
            })
            .end(done)
        });
    });
    
    
});


