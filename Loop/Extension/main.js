const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

for(let i of Object.keys(dictionary))
{
  console.log("Words that begin with " + i + ":")
  for(let j = 0;j< dictionary[i].length;j++)
  {
    console.log(dictionary[i][j])
  }
}