const deleteOneElement = function(array,start)
{
    array
}

const insertElements = function(array,start,item1,item2)
{   
    let count = 0
    if(item1 !=undefined)
    {
        count++;
    }
    if(item2 != undefined)
    {
        count++
    }
    console.log(count)

          if(count>1)
          {
                array.concat([...array.slice(0,start),item1,item2,...array.slice(start)])
    
            count = 0
            console.log(array)
            
          }
          else if(count == 1)
          {
            array = [...array.slice(0,start),item1,...array.slice(start)]
          }
          else
          {
              console.log("you have no items to add")
          }

}
const splice = function(array,start = 0,deleteCount = array.length - 1,item1 = undefined,item2 = undefined){
    let deletedItems = []

    if(start>array.length)
    {
        start = array.length
    }

    if(start < 0)
    {
        start = array.length - 1 + start
    }

    if(array.length + start < 0 )
    {
        start = 0
    }
    
    if(deleteCount >= array.length - start)
    {
        start = 0
        deleteCount = array.length - 1
    }
    if(deleteCount == 0 || deleteCount < 0)
    {

        array = insertElements(array,start,item1,item2)
        return deletedItems
    }

    deleteOneElement()
    
}

let num =  [1,2,3]
splice(num,0,0,-1,0)
console.log(num)
