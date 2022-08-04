// Allows the user to click on the Generate button
document.getElementById("generate").addEventListener("click", genPassword); 


// The function that generates the unique password combination
 function genPassword() {

  // Variables for the creation of the password

    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789"
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialchar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var password = "";
    var emptypassword = "";

      // Prompt requesting length of the password

    var passwordLength = prompt("Please choose a length between 8 - 128.");

    // Verifying password length between 8 and 128 if not between 8 and 128 returning

    if (passwordLength < 8 || passwordLength > 128)
    {
      alert("Please choose a password between 8-128.");
      
      return;
    } 

    // Confirming if the user wants lower case letters

    var addLowerCase = confirm("Do you want to add Lowercase letters?");
    {
      if (addLowerCase === true)
      {
        addLowerCase = true;

      }else
      {
        addLowerCase = false;
      }
    }

    // Confirming if the user wants upper case letters

    var addUpperCase = confirm("Do you want to add Uppercase letters?");
    {
      if (addUpperCase === true)
      {
        addUpperCase = true;

      }else
      {
        addUpperCase = false;
      }
    }
    //Confirming if the user wants numbers 

    var addNumbers = confirm("Do you want to add Numbers?");
    if (addNumbers === true)
    {
      addNumbers = true;
    } else
    {
      addNumbers = false;
    }
    //Confirming if the user wants special characters

    var addSpecial = confirm("Do you want to add Special characters?");

    if (addSpecial === true)
      {
        addSpecial = true;

      }else
      {
        addSpecial = false;
      }
      // A set of checks to verify the appropriate combination for the new password

      if (addLowerCase === true && addNumbers === true && addUpperCase === true && addSpecial === true ) {

        var combined = emptypassword.concat(lowercase ,numbers, uppercase, specialchar);

      } else if (addLowerCase === false && addNumbers === true && addUpperCase === true && addSpecial === true)
      {
          combined = emptypassword.concat(numbers, uppercase, specialchar);

      } else if (addLowerCase === true && addNumbers === false && addUpperCase === true && addSpecial === true)
      {
        combined = emptypassword.concat(lowercase, uppercase, specialchar);

      }else if (addLowerCase === true && addNumbers === true && addUpperCase === false && addSpecial === true)
      {
        combined = emptypassword.concat(lowercase, numbers, specialchar);

      }else if (addLowerCase === true && addNumbers === true && addUpperCase === true && addSpecial === false)
      {
        combined = emptypassword.concat(lowercase, numbers, uppercase);

      }else if (addLowerCase === false && addNumbers === false && addUpperCase === true && addSpecial === true)
      {
        combined = emptypassword.concat(uppercase, specialchar);

      }else if (addLowerCase === false && addNumbers === true && addUpperCase === false && addSpecial === true)
      {
        combined = emptypassword.concat(numbers, specialchar);

      }else if (addLowerCase === false && addNumbers === false && addUpperCase === false && addSpecial === true)
      {
        combined = emptypassword.concat(specialchar);

      }else if (addLowerCase === false && addNumbers === true && addUpperCase === true && addSpecial === false)
      {
        combined = emptypassword.concat(numbers, uppercase);

      }else if (addLowerCase === false && addNumbers === true && addUpperCase === false && addSpecial === false)
      {
        combined = emptypassword.concat(numbers);

      }else if (addLowerCase === true && addNumbers === false && addUpperCase === false && addSpecial === false)
      {
        combined = emptypassword.concat(lowercase);

      }else if (addLowerCase === false && addNumbers === false && addUpperCase === true && addSpecial === false)
      {
        combined = emptypassword.concat(uppercase);

      }else if (addLowerCase === false && addNumbers === false && addUpperCase === false && addSpecial === true)
      {
        combined = emptypassword.concat(specialchar);
      }else
      {
        alert("Nothing selected, please try again!");
        return;
      }

      // A for loop that runs through the previous selected confirms and the password length to generate the appropriate password combinations
    
 for (var i = 0; i <= passwordLength -1; i++) {
   var randomNumber = Math.floor(Math.random() * combined.length);
   password += combined.substring(randomNumber, randomNumber + 1 );
  }
    // Displays the new generated password in the input box
        document.getElementById("password").value = password;
 }