//set up local storage variable
var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

//add event listener to create new card in card creation box
document.getElementById("save_card").addEventListener("click", () => {
  addFlashcard();
});

//function to add a confirmation alert to make sure delete all is intended
function confirmAction() {
  //alert
    let confirmAction = confirm("Are you sure to delete all cards?");
    //if yes
    if (confirmAction) {
      //clear local storage
      localStorage.clear();
      //clear html for card
      flashcards.innerHTML = '';
      //clear array of cards
      contentArray = [];
      //if deletion was not wanted, cancel action and alert
    } else {
      alert("Deletion canceled");
    }
}
//dark mode function
function darkMode() {
  //apply to body
  var element = document.body;
  //toggle the class for darkmode
  element.classList.toggle("dark");
}

//add event listener to delete all to then run the function darkMode()
document.getElementById("delete_all_cards").addEventListener("click", confirmAction);

//event listener for opening card creation
document.getElementById("add_card_box").addEventListener("click", () => {
  
  document.getElementById("create_card").style.display = "block";
});
//event listender to close card creation
document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "none";
});

//function to create cards
flashcardMaker = (text, delThisIndex) => {
  //create new div
  const flashcard = document.createElement("div");
  //front side of card
  const question = document.createElement('h2');
  //backside of card
  const answer = document.createElement('h2');
  //deletion option
  const del = document.createElement('i');
  //add class
  flashcard.className = 'flashcard';
  //set styling
  question.setAttribute("style", "border-top:1px solid darkblue; padding: 15px; margin-top:30px; color:black !important");
  //key for object
  question.textContent = text.my_question;
  //styling
  answer.setAttribute("style", "text-align:center; display:none; color:darkblue");
  //set value for object
  answer.textContent = text.my_answer;

  //set class name for deletion "smurf"
  del.className = "fas fa-minus";
  //event listender to click on smurf and have it activate
  del.addEventListener("click", () => {
    //.splice(start, deleteCount)
    contentArray.splice(delThisIndex, 1);
    localStorage.setItem('items', JSON.stringify(contentArray));
    window.location.reload();
  })

  flashcard.appendChild(question);
  flashcard.appendChild(answer);
  flashcard.appendChild(del);
  //event listener to show "backside" of card
  flashcard.addEventListener("click", () => {
    //if not showing currently
    if(answer.style.display == "none")
      answer.style.display = "block";
    //if showing currently  
    else
      answer.style.display = "none";
  })
  //adding new flashcard to div for new cards
  document.querySelector("#flashcards").appendChild(flashcard);
}
//for every index in array run the function
//set up constructor
contentArray.forEach(flashcardMaker);
addFlashcard = () => {
  //set up values 
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");
  //create object
  let flashcard_info = {
    'my_question' : question.value,
    'my_answer'  : answer.value
  }
  //add to array
  contentArray.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(contentArray));
  //run function on most recent(last index as you make them) to create card
  flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
  question.value = "";
  answer.value = "";
}
