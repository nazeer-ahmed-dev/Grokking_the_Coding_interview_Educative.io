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
        if(key > array[mid] && array[mid+1]>key)
        {
            return mid+1
        }
        if(key < array[0])
        {
            return 0
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
console.log(toSearch1([1, 3, 8, 10, 15],12))
console.log(toSearch1([4, 6, 10],17))
console.log(toSearch1([4, 6, 10],-1))
// console.log(toSearch1([-1,0,3,5,9,12],9))