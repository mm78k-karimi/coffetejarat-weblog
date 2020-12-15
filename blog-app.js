
// SLIDER

const sliderBtn = document.getElementById("slider-btns");
const sliderImgs = document.getElementById("slider-imgs");

sliderBtn.addEventListener("click" , slideShow);
let slideCounter = 0 ;

function slideShow(e){
  if (e.target.parentElement.id == 'navigation-right'|| e.target.parentElement.id == 'navigation-left' ){
    for (let i = 0 ; i < sliderImgs.children.length ; i++){
      sliderImgs.children[i].style.width = "0px" ;
    }

    if (e.target.parentElement.id == "navigation-right"){
      if(slideCounter == 4) {
        slideCounter = 0 
      }else {
        slideCounter += 1 ;
      }
      sliderImgs.children[slideCounter].style.width = "33.333%"
      sliderImgs.children[slideCounter+1].style.width = "33.333%"
      sliderImgs.children[slideCounter+2].style.width = "33.333%"
    } 
    else if (e.target.parentElement.id == "navigation-left"){
      if(slideCounter == 0){
        slideCounter = 4
      }else {
        slideCounter -= 1 ;
      }
      sliderImgs.children[slideCounter].style.width = "33.333%"
      sliderImgs.children[slideCounter+1].style.width = "33.333%"
      sliderImgs.children[slideCounter+2].style.width = "33.333%"
    }

  }

}

// SUGGESTION MENU
const suggestions = document.getElementById('suggestions');
const suggestionList = document.getElementById('topic-menu')
suggestions.addEventListener ('click' , showSuggestionList)

function showSuggestionList(e) {
  
  if(suggestionList.style.top == "-30%") {
    suggestionList.style = "top : 80px"
  } else {
    suggestionList.style = "top : -30%"
  }

  e.preventDefault()
}
