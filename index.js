// Valid parentheses (20 mins)

// CHALLENGE

// Write a function called `maxAndMin` that accepts
// 2 arrays of positive integers. The function
// should return an array containing the largest
// and smallest difference between a number in array
// one and a number in array two.
// e.g. `maxAndMin([2,5],[3,6]) ===> [4,1]`

// EXAMPLES

// maxAndMin([21,7,15,8],[3,10,6]) === [18,1]
// maxAndMin([20],[5]) === [15,15]
// maxAndMin([4,10,5],[4,10,5]) === [6,0]
// maxAndMin([6,7,8,9,10],[1,2,3,4,5]) === [9,1]

// TESTING YOUR SOLUTION

// To test your solution, run 'npm install' in the root directory
// and then run 'npm test' to run the automated tests.

// SUBMITTING YOUR SOLUTION

// When done, make sure you're working on a forked repo, push your
// changes to your forked repo and submit a pull request.

function maxAndMin (A, B) {
  if (!Array.isArray(B)) return 'Please enter two arrays.'
  let max = 0;
  let min = Infinity;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) return 'Please enter positive integers only.';
    for (let j = 0; j < B.length; j++) {
      if (B[i] < 0) return 'Please enter positive integers only.';
      let diff = Math.abs(A[i] - B[j]);
      if (diff > max) max = diff;
      if (diff < min) min = diff; 
    }
  }
  return [max, min];
}

module.exports = maxAndMin;
