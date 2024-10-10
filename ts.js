const text = document.getElementById("textToConvert"); 
const convertBtn = document.getElementById("convertBtn"); 

convertBtn.addEventListener('click', function () { 
    const speechSynth = window.speechSynthesis; 
    const enteredText = text.value.trim(); // trim the text
    const error = document.querySelector('.error-para'); 
    
    // Error handling: Show error message if there's no text
    if (!enteredText.length) { 
        error.textContent = "Nothing to Convert! Please enter text in the text area."; 
        return; // Exit function if no text
    }

    // Clear any previous error messages
    error.textContent = ""; 
    
    // Check if speech synthesis is speaking
    if (!speechSynth.speaking) { 
        const newUtter = new SpeechSynthesisUtterance(enteredText); 
        
        // Change button text while speaking
        convertBtn.textContent = "Sound is Playing..."; 

        // When speech is done, reset the button text
        newUtter.onend = function() {
            convertBtn.textContent = "Play Converted Sound"; 
        };
        
        // Start the speech synthesis
        speechSynth.speak(newUtter); 
    }
});
