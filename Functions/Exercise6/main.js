const calculator =
{
    add: function(numA,numB)
    {
        return numA + numB
    },
    subtract: function(numA,numB)
    {
        return numA - numB
    }
}


const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42