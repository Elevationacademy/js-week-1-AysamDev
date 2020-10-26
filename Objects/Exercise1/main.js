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

if(p1.age == p2.age)
{
    if(p1.city == p2.city)
    {
        console.log(p2.name +" wants to date "+p1.name)
    }
    else
    {
        console.log(p2.name +" wanted to date "+p1.name + ",but couldn't.")
    }
}