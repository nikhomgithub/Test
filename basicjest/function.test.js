const functions = require('./functions');

test('add=',()=>{
    expect(functions.add(2,3)).toBe(5);
})

test('add!=',()=>{
    expect(functions.add(2,3)).not.toBe(4);
})

test('Should be null',()=>{
    expect(functions.isNull()).toBeNull();
})

test('Check value',()=>{
    expect(functions.checkValue(5)).toBe(5);
})

test('Should be falsy',()=>{
    expect(functions.checkValue(undefined)).toBeFalsy();
})

test('Should be Nikhom Phut',()=>{
    expect(functions.createUser()).toEqual({name:'Nikhom',lastname:'Phut'});
})

//$jest 
//jest --detectOpenHandles to detect async operations