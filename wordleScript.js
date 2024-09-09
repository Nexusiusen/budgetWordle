let answer ="sassy";
let counter=0;
let storage =document.getElementById("guessBox");


let inputField=document.getElementById("guess");

inputField.addEventListener('keydown', function(event) 
{
  if (event.key === 'Enter') 
  {
  	if (inputField.value.length == inputField.maxLength)
    {
    	console.log(event.key+"key was pressed!");
	    guess = inputField.value;
	    inputField.value="";
		
		console.log("suc");
		compareChar(guess);
		}
  }
});

function compareChar(guess)
{
	let colorCode =[]; 
	counter=0;
	let answerComp = answer.split("");
	let chars = guess.split("");

	for (let i = 0; i < answerComp.length; i++) 
	{
		for (let j = 0; j < guess.length; j++) 
		{
			//check if pos and letter match
			if (i == j && guess[i] == answerComp[j])
			{
				console.log("superYippie")
				colorCode[i]="lime";

			}//check if letter is in the word
			else if (guess[i] == answerComp[j])
			{
				if (colorCode[i]==null)
				{
					colorCode[i]="yellow";	
				}
				console.log("yippie"+counter);
					counter++;
			}
			else
			{
				if (colorCode[i]=="")
				{
					colorCode[i]="white";	
				}
				
			}
		}
		makeDiv(guess[i],colorCode[i]);
		if (colorCode [0] && colorCode [1] && colorCode [2] && colorCode [3] && colorCode [4])
		{
			alert("you win!");
		}
	}
 let newElem = document.createElement("BR");
  storage.appendChild(newElem);
}

function makeDiv(content,bgColor)
{
	let divMaker = document.createElement("DIV"); 
	divMaker.classList.add("letterBoxes");
	divMaker.innerHTML=content;
	divMaker.style.backgroundColor=bgColor;
	storage.appendChild(divMaker);

}