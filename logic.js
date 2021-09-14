const textForm = document.getElementById('text');

var text = "";

vowelArray = ['a', 'e', 'i', 'o', 'u'];

function lookForVowels(){
    text = textForm.value
    console.log(text);
    var vowelCount = 0;
    for(var i=0; i < text.length; i++){
        if(vowelArray.includes(text[i])){
            vowelCount++;
        }
    }
    alert("There are " + vowelCount + " vowels!");
}

