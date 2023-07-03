import { catsData } from "/js/data.js"

const gifsOnly = document.getElementById("gifs-only-option")
const radioBtnCont = document.getElementById("emotion-radios")
const memeModal = document.getElementById("meme-modal")
const memeModalInner = document.getElementById("meme-modal-inner")
const getImageBtn = document.getElementById("get-image-btn")
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn")


// =====================================================
// =================== EVENT LISTENERS =================
// =====================================================

radioBtnCont.addEventListener("change", higlightCheckedOption)

memeModalCloseBtn.addEventListener("click", closeModal)

getImageBtn.addEventListener("click", renderCat)


// =====================================================
// ====================== FUNCTIONS ====================
// =====================================================

function higlightCheckedOption(e) {
  
  const radios = document.getElementsByClassName('radio')
  for (let radio of radios){
    radio.classList.remove('highlight')
  }

  const targetID = document.getElementById(e.target.id)
  targetID.parentElement.classList.add("highlight")
}


function closeModal() {
  memeModal.style.display = 'none' 
}


function renderCat(){
  const catObject = getSingleCatObject()
  memeModalInner.innerHTML = `
    <img 
    class="cat-img" 
    src="./images/${catObject.image}"
    alt="${catObject.alt}">
  `
  memeModal.style.display = 'flex'
}


function getSingleCatObject(){
  const catsArray = getMatchingCatsArray()
  if (catsArray.length === 1){
    return catsArray[0]
  } else {
    const randNum = Math.floor(Math.random() * catsArray.length)
    return catsArray[randNum]
  }
}


function getMatchingCatsArray(){
  if (document.querySelector('input[type=radio]:checked')){
    const selectedEmotion = document.querySelector("input[type=radio]:checked")
    const isGif = gifsOnly.checked
    
    const matchingCatsArray = catsData.filter(function(cat){
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion.value) && cat.isGif
      } else {
        return cat.emotionTags.includes(selectedEmotion.value)
      }

    })
    return matchingCatsArray
  }
}


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













  