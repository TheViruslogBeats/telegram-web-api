const isPalindrome = (head) => {
  if(head.length % 2 !== 1){
    let arr1 = head.slice(0, head.length / 2)
    let arr2 = head.slice(head.length / 2)
    return arr1.join('') === arr2.reverse().join('')
  } else {
    return false
  }
}

console.log(isPalindrome([1,2,2,1]));
console.log(isPalindrome([1,2]));