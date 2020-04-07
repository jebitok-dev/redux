const add = (a, b) => a+b;
const generateGreeting = (name = Anonymous) => {
    return `Hi ${name}!`;
}

test('should add two numbers', ()=> {
    const result= add(5,4);
    expect (result).toBe(9);
   // expect (result).toBe(8);
});

test('should generate greeting for no name', ()=> {
    const result = generateGreeting('');
    expect (result).toBe('Hi !');
})