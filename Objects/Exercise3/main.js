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
    const myList2 = [p1,p2]

    myList.push(...myList2)
    console.log(myList)