// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This function asks the user password criteria and returns a generated password of random characters
function generatePassword()
{
    var lengthWhileLoop = true; // this value determines when the while loop will start/end
    while (lengthWhileLoop === true)
    {
        // length variable stores length of password
        var length = window.prompt("Choose password length (between 8 to 128 characters)\nNote: Decimal values will not be considered");
        
        // if length does not meet criteria, password is not generated and alert message is displayed
        if (length < 8 || length > 128)
        {
            // alert to show user that they have entered an invalid length
            window.alert("Invalid password length!");
        }
        else
        {
            length = Math.floor(length); // decimal values will not be consiered

            var criteriaWhileLoop = true; // this value determines when the while loop will start/end
            while (criteriaWhileLoop === true)
            {
                var password = ''; // generated password variable
                var lowercase = window.confirm("Do you want lowercase characters?"); // confirms if user wants lowercase values
                var uppercase = window.confirm("Do you want uppercase characters?"); // confirms if user wants uppcase values
                var number = window.confirm("Do you want numbers?"); // confirms if user wants number values
                var special = window.confirm("Do you want special characters?"); // confirms if user wants special values

                // if no criteria is chosen, user is alerted to choose atleast one criteria, else while loop ends
                if (lowercase === false && uppercase === false && number === false && special === false)
                {
                    window.alert("Choose atleast one criteria!");
                }
                else
                {
                    criteriaWhileLoop = false;
                }
            }

            // These arrays store the values of lowercases, uppercases, numebers, and special characters
            var lowercaseArray = []; // array length: 0-25
            var uppercaseArray = []; // array length: 0-25
            var numberArray = []; // array length: 0-9
            var specialArray = []; // array length: 0-14

            // the following for loops use the String.fromCharCode method to concatnate values to their respectively named arrays 
            for (lowercaseCharCode = 97; lowercaseCharCode <= 122; lowercaseCharCode++){
                lowercaseArray += String.fromCharCode(lowercaseCharCode);
            }
            for (uppercaseCharCode = 65; uppercaseCharCode <= 90; uppercaseCharCode++){
                uppercaseArray += String.fromCharCode(uppercaseCharCode);
            }
            for (numberCharCode = 48; numberCharCode <= 57; numberCharCode++){
                numberArray += String.fromCharCode(numberCharCode);
            }
            for (specialCharCode = 33; specialCharCode <= 47; specialCharCode++){
                specialArray += String.fromCharCode(specialCharCode);
            }

            // the user's criteria choices are entered into the array in the order they are asked
            var userChoiceArray = [lowercase, uppercase, number, special];

            // the arrays of the criteria values are put into another array called unfitleredParentArray
            var unfilteredParentArray = [lowercaseArray, uppercaseArray, numberArray, specialArray];

            // this for loop iterates through the 'userChoiceArray' array and assigns the index number where it is 'true' to an array called 'trueIndexes'
            var trueIndexes = [];
            for (var index = 0; index < userChoiceArray.length; index++)
            {
                if (userChoiceArray[index] === true)
                {
                    trueIndexes.push(index);
                }
            }

            // this for loop iterates through 'trueIndexes' array and assigns 'unfilteredParentArray' values to 'parentArray' 
            var parentArray = [];
            for (var index = 0; index < trueIndexes.length; index++)
            {
                parentArray.push(unfilteredParentArray[trueIndexes[index]]);
            }

            /*
            - the following for loop iterates through the length of the password
            - every iteration it goes through one of the following, lowercases, uppercases, numbers, 
            or special characters, and then goes through them again every four rounds
            - a random value is chosen from whichever array the loop is on
            - the random value is concatnated to the variable 'password'
            */
            var parentArrayIndex = 0;
            for (index = 0; index < length; index++)
            {
                var childArray = parentArray[parentArrayIndex];
                var childArrayLength = childArray.length;

                // if 'parentArray' which includes the user's choices go beyond its own length, then the if statement is called
                if (parentArrayIndex >= (parentArray.length - 1)){
                    //'password' variable is concatnated 
                    password += parentArray[parentArrayIndex][Math.floor(Math.random() * childArrayLength)];
                    parentArrayIndex = 0;
                }
                else{ // if 'parentArray' which includes the user's choices within its own length, then the else statement is called
                    //'password' variable is concatnated 
                    password += parentArray[parentArrayIndex][Math.floor(Math.random() * childArrayLength)];
                    parentArrayIndex++;
                }
            }

            lengthWhileLoop = false; // since we have our password we can set 'whileLoop' to false and break out of it
        }
    }

    return password;
}