const inputvalue = document.getElementById("userInput");


document.querySelectorAll(".numbers").forEach((item) => {
    item.addEventListener("click", (e) => {
     
        if (inputvalue.innerText === "NaN" || inputvalue.innerText === "0") {
            inputvalue.innerText = "";
        }
       
        inputvalue.innerText += e.target.innerText.trim();
    });
});

document.querySelectorAll(".operations").forEach((item) => {
    item.addEventListener("click", (e) => {
        const clickedValue = e.target.innerText.trim(); 
        const lastChar = inputvalue.innerText.slice(-1);

        if (clickedValue === "=") {
            //eval method understand '*' as multiplication and I want to replace it with "X" 
            const expression = inputvalue.innerText.replace(/x/, "*"); 
            try {
                inputvalue.innerText = eval(expression); 
            } catch {
                inputvalue.innerText = "Error"; 
            }
        }
  
        else if (clickedValue === "RESET") {
            inputvalue.innerText = "0";
        }
  
        else if (clickedValue === "DEL") {
            inputvalue.innerText = inputvalue.innerText.slice(0, -1) || "0"; 
        }
     
        else {
        
            if (!["+", "-", "x", "/"].includes(lastChar)) {
                inputvalue.innerText += clickedValue;
            }
        }
    });
});
