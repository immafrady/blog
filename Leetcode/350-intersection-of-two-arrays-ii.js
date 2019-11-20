/**
 * 350. 两个数组的交集 II
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * 
 * 结果：
 * 执行用时 :68 ms, 在所有 JavaScript 提交中击败了88.24 %的用户
 * 内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了78.99 %的用户
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // [参照组, 目标组]
    let arrReference, arrTarget
    if (nums1.length >= nums2.length) {
        arrReference = nums1
        arrTarget = nums2
    } else {
        arrReference = nums2
        arrTarget = nums1
    }
  
    const arrResult = []
    
    arrTarget.forEach(num => {
        const index = arrReference.indexOf(num)
        if (~index) {
            // 存在
            arrResult.push(...arrReference.splice(index, 1))
            
        }
    })

    return arrResult
};