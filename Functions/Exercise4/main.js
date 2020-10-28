const isEven = function(number)
{
    if(Number.isFinite(number))
    {
        if(number%2==0)
        {
            return true
        }
        else
        {
            return false
        }
    }
}


const numbers = [12,15,18,14,11]
for(let num of numbers)
{
    if(isEven(num))
    {
        console.log(num)
    }
}