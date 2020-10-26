let p1 = {
    name: "Aysam",
    age:    22,
    city: "haifa"
    }
    
    let p2 = {
    name: "Ragad",
    age:    22,
    city: "haifa"
    }
    
    const myList = [p1,p2]
    console.log(myList)
    myList[0].name = "Chris"
    console.log(myList)
    myList.splice(1)
    console.log(myList)
