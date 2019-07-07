/**
 * 2. 两数相加
 * https://leetcode-cn.com/problems/add-two-numbers/
 * 
 * 结果：
 * 执行用时 :160 ms, 在所有 JavaScript 提交中击败了95.85%的用户
 * 内存消耗 :38.1 MB, 在所有 JavaScript 提交中击败了87.52%的用户
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let canGoFlag = true
    let overTen = false
    let resultListNode = null
    let head = null

    while (canGoFlag) {
        const result = (l1.val + l2.val + overTen) % 10
        overTen = (l1.val + l2.val + overTen) / 10 >= 1
        if (resultListNode) {
            head.next = new ListNode(result)
            head = head.next
        } else {
            // 初始化
            resultListNode = new ListNode(result)
            head = resultListNode
        }
        if (l1.next || l2.next || overTen) {
            l1 = l1.next || new ListNode(0)
            l2 = l2.next || new ListNode(0)
        } else {
            canGoFlag = false
        }
    }

    return resultListNode
};