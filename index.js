import { catsData } from "./data.js"

const gifsOnly = document.getElementById("gifs-only-option")
const radioBtnCont = document.getElementById("emotion-radios")
const memeModal = document.getElementById("meme-modal")
const getImageBtn = document.getElementById("get-image-btn")

// function getEmetionsArray(arr){
//   const emotionsArray = []
//   for (let x=0; x<arr.length; x++){
//     for (let y=0; y<arr[x].emotionTags.length; y++){
//       emotionsArray.push(arr[x].emotionTags[y])
//     }
//   }
//   console.log(emotionsArray)
// }
// getEmetionsArray(catsData)

// ===================================
// ===================================

function getEmotionsArray(arr){
  const emotionsArray = []
  for (let cat of arr){
    for (let emotion of cat.emotionTags){
      if(!emotionsArray.includes(emotion)){
        emotionsArray.push(emotion)
      }
    } 
  }
  return emotionsArray
}


radioBtnCont.addEventListener("change", higlightCheckedOption)


function higlightCheckedOption(e) {
  
  const radios = document.getElementsByClassName('radio')
  for (let radio of radios){
    radio.classList.remove('highlight')
  }

  const targetID = document.getElementById(e.target.id)
  targetID.parentElement.classList.add("highlight")
}

function renderEmotionsRadios(cats){
  let htmlCode = ``
  const emotions = getEmotionsArray(cats)
  for (let emotion of emotions){
    
    htmlCode += `
      <div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input 
        type="radio" 
        id="${emotion}" 
        value="${emotion}" 
        name="choice-radio">
      </div>
    `
  }
  
  radioBtnCont.innerHTML = htmlCode
}

renderEmotionsRadios(catsData)


getImageBtn.addEventListener("click", getMatchingCatsArray)

function getMatchingCatsArray(){
  const isGif = gifsOnly.checked
  


  if (document.querySelector('input[type=radio]:checked')){
    const selectedEmotion = document.querySelector("input[type=radio]:checked")
  }

  
  
  closeModal()
}

function closeModal(){
  document.getElementById("meme-modal-close-btn").addEventListener("click", function() {
    memeModal.style.display = 'none'
    
  })
}