const utils = require('./utils');
const expect = require('expect');

//this is BDD
it('should add two numbers', () => {
    var res = utils.add(33, 11);
    
    // if(res !== 44){
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    var res = utils.square(2);

    expect(res).toBe(4).toBeA('number');
});

it('should verify first and last names are set'), () => {
    var res = utils.setName({
        age: 40, 
        location: 'Erwin'
    }, 'Jeremy Lincoln');
    console.log(res);
    //expect(res).toInclude(4);
}

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



