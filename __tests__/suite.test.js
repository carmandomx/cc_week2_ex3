const { spinal } = require('../exercise');

test('Testing the spinal exercise', () => { 
    expect(spinal('this is a test')).toBeDefined();
    expect(spinal('this is a Test')).toBe('this-is-a-test')
    expect(spinal('ThisIsATest')).toBe('this-is-a-test')
 })