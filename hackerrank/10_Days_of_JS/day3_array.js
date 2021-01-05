function getSecondLargest(nums) {
    // Complete the function
  let max = Math.max(...nums);
  let arr = nums.filter(num =>  num != max );
  let newmax = Math.max(...arr)
  return newmax;
}

//This line only here to test - Not to submit
console.log(getSecondLargest([2,3,6,6,5]));
