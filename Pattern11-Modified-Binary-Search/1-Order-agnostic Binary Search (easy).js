//method1
const toSearch = function(array , key)
{
    for(let i=0;array.length;i++)
    {
        if(array[i]==key)
        {
            return i
        }
    }
    return -1
}
//method2
const toSearch1 = function(array,key)
{
    let start = 0
    let end = array.length-1
    let mid ;
    let isAsc = array[start] < array[end]
    while(start<=end)
    {
        mid= Math.floor((end+start)/2)
        if(key==array[mid])
        {
            return mid
        }
        if(isAsc)
        {
                if(array[mid]>key)
                {
                    end = mid - 1
                }
                else
                {
                    start = mid+1
                }   
        }
        else
        {
                if(key > array[mid])
                {
                        end = mid -1
                }
                else
                {
                    start = mid+1
                }
        }

    }
    return -1

}
console.log(toSearch1([4,6,10],10))
console.log(toSearch1([1, 2, 3, 4, 5, 6, 7],5))
console.log(toSearch1([10, 6, 4],10))
console.log(toSearch1([-1,0,3,5,9,12],9))