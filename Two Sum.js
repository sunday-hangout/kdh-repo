/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let table = new Map();
    for (var i = 0; i < nums.length; i++)
    {
        if (table.has(target - nums[i]))
            return [table.get(target - nums[i]), i];
        else
            table.set(nums[i], i);
    }
};
