let nums = []
for(let i = 0;i<100;i++)
{
    nums.push(i+1)
}

for(let i=0;i<100;i++)
{
    if(nums[i]%2==0)
    {
        console.log(nums[i])
    }
}