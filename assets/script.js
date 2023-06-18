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
        }
    }
}