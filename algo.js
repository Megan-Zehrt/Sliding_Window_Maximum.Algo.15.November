// 239. Sliding Window Maximum



// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.







/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
        
    let n = nums.length
    let result = new Array(n - k + 1)
    let left = 0
    let right = 0
    let stack = []

    while(right < n){

        let currentNum = nums[right]

        while(stack.length > 0 && currentNum > nums[stack[stack.length-1]]){
            stack.pop()
        }

        stack.push(right)

        if(left > stack[0]){
            stack.shift()
        }

        if(right >= k - 1){
            result[left] = nums[stack[0]]
            left++
        }

        right++
    }

    return result
};