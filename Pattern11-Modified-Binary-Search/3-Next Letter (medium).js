const search = function(nums,key)
{
    let n = nums.length;
    if(key<nums[0] || key>nums[n-1])
        return nums[0]
    
    let start = 0 , end = n-1
    while(start<=end)
    {
        let mid = start + (end - start)/2
        if(key<nums[mid])
        {
            end = mid - 1
        }
        else
        {
            start = mid + 1
        }
    }

    return nums[start%n];
}
console.log(search(['a', 'c', 'f', 'h'],'f'))
console.log(search(['a', 'c', 'f', 'h'],'b'))
console.log(search(['a', 'c', 'f', 'h'],'m'))
console.log(search(['a', 'c', 'f', 'h'],'h'))
