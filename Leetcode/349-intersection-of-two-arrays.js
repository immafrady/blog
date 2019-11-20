/**
 * 349. 两个数组的交集
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * 
 * 结果：
 * 执行用时 :56 ms, 在所有 JavaScript 提交中击败了99.75 %的用户
 * 内存消耗 :34 MB, 在所有 JavaScript 提交中击败了69.73 %的用户
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const setResult = new Set()
    nums2.forEach(num => {
        if (set1.has(num)) {
            setResult.add(num)
        }
    })
    return Array.from(setResult)
};