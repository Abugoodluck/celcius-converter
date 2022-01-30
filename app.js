// write a program to convert fahrenheit to celsius

// formular to use (f - 32) * 5 / 9
convert = () => {
  var inputValue = document.getElementById('inputField').value;
  var displayResult = document.getElementById('display');

  if(parseInt(inputValue)){
  let celsius = ((parseInt(inputValue)- 32) * 5 / 9);
  displayResult.value = celsius + 'C';
  }
 else if (!parseInt(inputValue)){
    alert('The field must not be empty')
  }
};
   

