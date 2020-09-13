/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var n1 = nums1.length;
    var n2 = nums2.length;
    if (n1 < n2)
        return findMedianSortedArrays(nums2, nums1);
    
    var low = 0, high = n2 * 2;
    while (low <= high)
    {
        var m2 = Math.floor((low + high) / 2);
        var m1 = n1 + n2 - m2;
        
        var L1 = (m1 == 0) ? Number.MIN_SAFE_INTEGER : nums1[Math.floor((m1 - 1) / 2)];
        var L2 = (m2 == 0) ? Number.MIN_SAFE_INTEGER : nums2[Math.floor((m2 - 1) / 2)];
        var R1 = (m1 == n1 * 2) ? Number.MAX_SAFE_INTEGER : nums1[Math.floor(m1 / 2)];
        var R2 = (m2 == n2 * 2) ? Number.MAX_SAFE_INTEGER : nums2[Math.floor(m2 / 2)];
        
        if (L1 > R2)
            low = m2 + 1;
        else if (L2 > R1)
            high = m2 - 1;
        else
            return (Math.max(L1, L2) + Math.min(R1, R2)) / 2.0;
            
    }
    
    return -1;
};
