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


console.log(isEven(2))