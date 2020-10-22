let boughtTesla = false
const yearOfTeslaPurchase = 2018
let isUSCitizen = true
let currentYear = 2018

if(boughtTesla && isUSCitizen)
{
    if(currentYear-yearOfTeslaPurchase >= 4)
    {
        console.log("would you like an upgrade?")
    }
    else
    {
        console.log("are you satisfied with the car?")
    }
}
else if(boughtTesla && !isUSCitizen)
{
    console.log("would you like to move to the USA?")

}
else
{
    console.log("would you like to buy an Tesla?")
}