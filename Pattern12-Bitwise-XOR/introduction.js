const findMissingNumber = function(nums)
{
    let n = nums.length+1

    let x1 = 1

    for(let i=2;i<=n;i++)
    {
        x1 = x1 ^ i;
    }
    let x2 = nums[0]
  
    for(let i=1;i<n-1;i++)
    {
        x2 = x2 ^ nums[i];

    }
    return x1^x2

}
console.log(findMissingNumber([1,5,2,6,4]))
