const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const clearBtn = document.getElementById('clear')

checkBtn.addEventListener("click", function(){
 const inputValue = textInput.value.trim();
  if(inputValue === ""){
    alert("Please input a value")
  }
  if(isPalindrome(inputValue)){
    result.textContent = `"${inputValue}" is a palindrome.`
  } else {
    result.textContent = `"${inputValue}" is not a palindrome.`
  }
});

function isPalindrome(str){
  //To remove space, sign and symbols 
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  //To reverse the string 
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}
//clear button 
clear.addEventListener('click', function(){
  result.textContent = ''
  textInput.value = ''
})
