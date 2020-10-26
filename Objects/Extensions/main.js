const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
const hasOven = kitchen.hasOven
const works = kitchen.fridge.works 
if(hasOven && works &&
     date - kitchen.fridge.items[1].expiryDate == 1)
     {
         console.log(kitchen.owner+"'s " + kitchen.fridge.items[1].name + " expired 1 day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the"+
          kitchen.fridge.items[1].name +" in.")
     }

 if(!hasOven && works &&
        date - kitchen.fridge.items[1].expiryDate == 1)
    {
        console.log(kitchen.owner+"'s " + kitchen.fridge.items[1].name + " expired 1 day ago. Weird, considering her fridge works.Too bad she doesn't have an oven to cook the "+
         kitchen.fridge.items[1].name +" in.")
    }

    if(hasOven && !works &&
        date - kitchen.fridge.items[1].expiryDate == 1)
    {
        console.log(kitchen.owner+"'s " + kitchen.fridge.items[1].name +
         " expired 1 day ago.Probably because her fridge doesn't work. Luckily, she has an oven to cook the "+
          kitchen.fridge.items[1].name +" in."+ "And she'll have to pay "+kitchen.fridge.price/2 + 
          " to fix the fridge")
    }

    if(!hasOven && !works &&
        date - kitchen.fridge.items[1].expiryDate == 1)
    {
        console.log(kitchen.owner+"'s " + kitchen.fridge.items[1].name +
         " expired 1 day ago.Probably because her fridge doesn't work.Too bad she doesn't have an oven to cook the "+
          kitchen.fridge.items[1].name +" in."+ "And she'll have to pay "+kitchen.fridge.price/2 + 
          " to fix the fridge")
    }