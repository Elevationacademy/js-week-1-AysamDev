
const splice = function(array,start,deleteCount){
    let deletedItems = []
    let temp = []
    let argsLen = arguments.length
    if(start < 0)
    {
        start = array.length + start
        if(start>0)
        {
            start = start
        }
        else
            start = 0
    }
    else
    {
        if(start < array.length)
        {
            start = start
        }
        else
        {
            start = array.length
        }
    }
    if(deleteCount < 0)
    {
        deleteCount = 0
    }

    if(deleteCount > (array.length - start))
    {
        deleteCount = array.length - start
    }
    if(deleteCount == undefined)
    {
        deleteCount = array.length
    }

    for(let i = 0; i < start;i++)
    {
        temp[i] = array[i]
    }

    // Add new elements supplied as args
    for (let i = 3; i < argsLen; i++)
    {
        
        temp.push(arguments[i])
    }

    // Copy removed items to removed array
    for (let i = start; i < start + deleteCount; i++)
    {
        if(array[i]!=undefined)
        deletedItems.push(array[i])
    }
    // copy the rest of the array
    for(let i = start+(deleteCount||0);i<array.length;i++)
    {
        temp.push(array[i])
    }
    
    array.length = 0
    for(let i = 0;i<temp.length;i++)
    {
        array[i] = temp[i]
    }
    console.log(deletedItems)
    return deletedItems


}

let num =  [1,2,3]
splice(num,1,1,55)
console.log(num)
