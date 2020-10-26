const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

//capitalize the first letter and lowercase the rest letters

  let openTables = true
  let name = prompt('Please enter the name for your reservation')
  
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  //save the name.
  console.log(name)
  if(reservations[name] === undefined)
  {
        if(openTables)
    {
      
        reservations[name.toLowerCase()] = {claimed: true}
        console.log("you are welcomed to the restaurant")
    }
    else
    {
        console.log("You have no reservation")
    }
  }
  else if(reservations[name].claimed == false)
  {
    console.log("welcome "+name)
  }
   else
  {
    console.log("Hmm, someone already claimed this reservation")
  }


  
//check 5.2