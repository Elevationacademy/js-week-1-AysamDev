//===================================================================================
//Section 1
//===================================================================================
const run = true
let distance = 8
if (run) {
   
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}


console.log("Damn, you see this gal? She ran " + distance + " miles")    
    //===================================================================================//Section 2//===================================================================================

    let cowSound = "moo"
    if (13 == "space") {
   
}
else {
    console.log("Cow says " + cowSound)
}

//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)

//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it"
let seed = ""
const getSeed = function () {
    seed = "brown seed"
}

const plant = function () {
    seed = getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()

//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
let found = false
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
             found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
let isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true //can't assign new value to CONST
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}