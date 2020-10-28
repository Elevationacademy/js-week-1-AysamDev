const numbers = [12,15,18,14,11]
const checkExists = function(numbers,number)
{
  for(let num of numbers)
  {
    if(num == number)
    {
      return true
    }
  }
  return false
}



console.log(checkExists(numbers,1))