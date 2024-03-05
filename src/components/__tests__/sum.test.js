import Sum from "../Sum";


test("Sum functionality should calculate the sum of 2 numbers",()=>{
    const result = Sum(2,3);
    //Assertion
    expect(result).toBe(5);
})
