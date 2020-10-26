const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i=0;i<names.length;i++)
{
    people.push({name:names[i],age:ages[i]})

}
console.log(people)


for(const pep in people)
{
    console.log(people[pep].name + " is "+ people[pep].age + " years old")
}