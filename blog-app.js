
//  SLIDER

const sliderBtn = document.getElementById("slider-btns");
const sliderImgs = document.getElementById("slider-imgs");

sliderBtn.addEventListener("click" , slideShow);
let slideCounter = 0 ;

function slideShow(e){
  if (e.target.parentElement.id == 'navigation-right'|| e.target.parentElement.id == 'navigation-left' ){
    for (let i = 0 ; i < sliderImgs.children.length ; i++){
      sliderImgs.children[i].style.flex = "0"; 
    }

    if (e.target.parentElement.id == "navigation-right"){
      if(slideCounter == 4) {
        slideCounter = 0 
      }else {
        slideCounter += 1 ;
      }
      sliderImgs.children[slideCounter].style.flex = "1";
      sliderImgs.children[slideCounter+1].style.flex = "1";
      sliderImgs.children[slideCounter+2].style.flex = "1";
    } 
    else if (e.target.parentElement.id == "navigation-left"){
      if(slideCounter == 0){
        slideCounter = 4
      }else {
        slideCounter -= 1 ;
      }
      sliderImgs.children[slideCounter].style.flex = "1";
      sliderImgs.children[slideCounter+1].style.flex = "1";
      sliderImgs.children[slideCounter+2].style.flex = "1";
    }

  }

}

// SUGGESTION MENU
const suggestions = document.getElementById('suggestions');
const suggestionList = document.getElementById('topic-menu')
suggestions.addEventListener ('click' , showSuggestionList)

function showSuggestionList(e) {
  
  if(suggestionList.style.top == "-30%") {
    suggestionList.style = "top : 77px"
  } else {
    suggestionList.style = "top : -30%"
  }

  e.preventDefault()
}
