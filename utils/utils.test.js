const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    describe('#add', () => {
        //this is BDD
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            
            expect(res).toBe(44).toBeA('number');
        });
    })
    

    it('should square a number', () => {
        var res = utils.square(2);

        expect(res).toBe(4).toBeA('number');
    });

    it('should verify first and last names are set', () => {
        var user = { age: 40, location: 'Erwin' }
        var res = utils.setName(user, 'Jeremy Lincoln');
        
        expect(res).toInclude({
            firstName: 'Jeremy',
            lastName: 'Lincoln'
        }).toBeA('object');
    });

    //async test layout
    it('should async add two numbers', (done) =>{
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done(); //this has to be called or the assertion test never finishes
        });
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(3, (sum) => {
            expect(sum).toBe(9).toBeA('number');
            done();
        })
    })



    // it('should expect some values', () => {
    //     //check for the not equal to
    //     //expect(12).toNotBe(11);
    //     //check for equality between objects and arrays
    //     //expect({name: 'Jeremy'}).toEqual({name: 'Jeremy'});
    //     //expect({name: 'jeremy'}).toNotEqual({name: 'Jeremy'});
    //     //Check to see if that have or contain a certain item or property (for objects)
    //     //expect([2,3,4]).toInclude(4);
    //     //expect([2,3,4]).toExclude(5);
    //     expect({
    //         name: 'jeremy',
    //         age: 40,
    //         location:'Erwin'
    //     }).toExclude({
    //         age: 56
    //     })
    // });
});





