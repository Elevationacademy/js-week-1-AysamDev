const capitalize = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase() //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
  }
const getAge = function(age){
    if(age < 21)
    {
        return "an UnderAge"
    }
    else if(age > 55)
    {
        return "a 55+"
    }
    else
    {
        return `${age} years old `
    }
}

const getProfession = function(profession)
{   
    let capProfesssion = ''
    let str = profession.split(' ')
    for(let prof of str)
    {
        capProfesssion += capitalize(prof) + " "
    }
    return capProfesssion

}

const getCityAndCountry = function(city,country)
{
    str = ""
    str +=  `from ${capitalize(city)}, ${capitalize(country)}. `
    return str
}

const getCatchPhrase = function(catchphrase)
{
    str = capitalize(catchphrase)
    return str
}

  const getSummary = function(person)
  {
    let summary = ""
    summary += `${capitalize(person.name)}`
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += `${getProfession(person.profession)}`//call function for profession
    summary += `${getCityAndCountry(person.city,person.country)}`//call function for country + city
    summary += `${capitalize(person.name)} loves to say "${getCatchPhrase(person.catchphrase)}".`//call function for catchphrasereturn summary
    return summary
  }
  
people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

  console.log(capitalize("aysam salalha"))
 

  for(let people of people_info)
  {
    console.log(getSummary(people))
  }

  ////////////////////////////////////////////// COUNT WORDS FUNCTIONS

  const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
  const specialChars = [",", ".", "'", '"',"?", "!", ";"]
  const wordCounts = {}


  const cleanText = function(sentence)
  {
    sentence = sentence.split(" ")
    console.log(sentence)
    for(let i  in sentence)
    {
      if(sentence[i].includes(','))
      {
        sentence[i] = sentence[i].split(',').join("")
        console.log(sentence[i])
      }
      if(sentence[i].includes("."))
      {
        sentence[i] = sentence[i].split(".").join("")
        console.log(sentence[i])
      }
      if(sentence[i].includes("'"))
      {
        sentence[i] = sentence[i].split("'").join(" ")
        console.log(sentence[i])
      }
      if(sentence[i].includes('"'))
      {
        sentence[i] = sentence[i].split('"').join(" ")
        console.log(sentence[i])
      }
      if(sentence[i].includes('?'))
      {
        sentence[i] = sentence[i].split('?').join(" ")
        console.log(sentence[i])
      }
      if(sentence[i].includes('!'))
      {
        sentence[i] = sentence[i].split('!').join(" ")
        console.log(sentence[i])
      }
      if(sentence[i].includes(';'))
      {
        sentence[i] = sentence[i].split(';').join(" ")
        console.log(sentence[i])
      }
      
    }
    console.log(sentence)
    return sentence
  }

  const addToCounter = function(sentence,wordCounts)
  {
    for(let i in sentence)
    {
      if(Object.keys(wordCounts).includes(sentence[i]))
      {
        wordCounts[sentence[i]]++
      }
      else
      {
        wordCounts[sentence[i]] = 1
      }
    }
    return wordCounts
  }
  const countWords = function(sentence,wordCounts)
  {
    sentence = cleanText(sentence)
    addToCounter(sentence,wordCounts)
    console.log(wordCounts)
  }




  countWords(story,wordCounts)