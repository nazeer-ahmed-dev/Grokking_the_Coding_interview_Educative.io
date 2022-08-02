const singleNumber = function(nums)
{
    let array = []
    let c = 0

    for(let i=0;i<nums.length;i++)
    {
        if(array.indexOf(nums[i])!=-1)
        {
            let index = nums.indexOf(nums[i])
            array.splice(index,1)
            c ++;
        }
        else
        {
            array.push(nums[i])
       
        }
    }
    
    return array[0]
}
console.log(singleNumber([1,4,2,2,1,3,2,3]))

// method2
const singleNumber1 = function(nums)
{
    let num =0;
    for(let i=0;i<nums.length;i++)
    {
        num = num ^ nums[i]
    }
    return num
}
console.log(singleNumber1([1, 4,2, 1,3, 2, 3]))