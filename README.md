# GENERATE-PASSWORD

## Description

It is challenging to create a strong password on your own and also inconvenient. That is why I created this project to create a password that provides great security. My application generates a random password based on the criteria provided by the user. The user is able to choose the length, whether they would like to include lowercase, uppercase, numbers, and/or special characters in their password. 

## Table of Contents

- Installation
- Usage
- Credits
- Tests

## Installation

- User requires a normal web-browser to user the application
- In order to apply changes to the application, the user would be required to install the visual studio code
- The user would need to clone the github repository on their local server 
- Finally, the user can make edits as they prefer

## Usage

- Once the application starts, click the red button to generate a password
- User is prompted to enter the length of the password. Length must be between 8 and 128 otherwise an alert message is displayed
- If the length entered is a decimal number then the number after the decimal will be ignored. For example, if user enters 20.7, then the application will generate password of 20 length
- User will be prompted to choose whether they want their password to include lowercases, uppercases, numbers, and/or special characters
- User must choose atleast one criterian else an alert message will be displayed
- The generate password will include minimum one character from the chosen criteria
- Once all prompts are completed, the generated password will be displayed in the textarea



## Credits

This link is to the github repository which inlcuded the starter code for the javascript file. The repository included the completed html and css files.
https://github.com/coding-boot-camp/friendly-parakeet

Following are the doucmentations I used to help me write the javascript code to generate password:
- https://www.w3schools.com/jsref/jsref_indexof_array.asp
- https://www.w3schools.com/jsref/jsref_filter.asp
- https://www.ssec.wisc.edu/~tomw/java/unicode.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

## Tests

The user can test the application by choosing several combinations of the criteria from lowercases, uppercases, numbers, and special characters. User can also choose different values from password length.