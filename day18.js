function hasSumOfTwo(arr1, arr2, targetSum) {
    // Create a set to store the elements from the first array
    const set = new Set(arr1);
  
    // Loop through the elements in the second array
    for (const num of arr2) {
      // Calculate the difference needed to reach the target sum
      const diff = targetSum - num;
      
      // If the difference is found in the set, we have a match
      if (set.has(diff)) {
        return true;
      }
    }
    
    // No matching pair was found
    return false;
  }
  
  const arr1 = [1, 4, 6, 8];
  const arr2 = [3, 7, 2, 9];
  const targetSum = 13;
  console.log(hasSumOfTwo(arr1, arr2, targetSum)); // Output: true (6 from arr1 + 7 from arr2 = 13)
  