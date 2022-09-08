//Assigning ID's of HTML element to JavaScript's variables.
const userInput = document.getElementById("userInput").value;
const combinedWord = document.getElementById("combinedWord");
const reversedWord = document.getElementById("reversedWord");
const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById('clearBtn');
//ends here

//We called the checkBtn and access the property of oncllick and assign the value which is the Method.
checkBtn.onclick = function(){
        const regEx = /[^\W\s_]/gi // => regEx means regular expression, it means the string not related in the inside of bracket will not match.
        const result = userInput.match(regEx); // => getting pure string by user input using regular expression
        const combineWord = result.join("").toLowerCase(); // => then use array method join to have a string then set it all to lowercase
        const reverseWord = combineWord.split("").reverse().join(""); // => then after having a string use array method split to set it as Array element then reverse it then join it again

        //assign the values of combineWord and reverseWord to input fields of combinedWord & reversedWord.
        combinedWord.value = combineWord;
        reversedWord.value = reverseWord;
        //ends here

        //And now let's validate it if it is true or not.
        if(combineWord == reverseWord){
            alert("It's Palindrome");
        }else{
            alert("It's not Palindrome");
        }
}       //ends here
//ends here

//setting up the clear button
clearBtn.onclick = function(){
    //if user click the clear button page will be reload and the input fields will be clear.
    window.location.reload(); 
    combinedWord.value = "";
    reversedWord.value = "";
    userInput = "";
    // ends here
}
//ends here
