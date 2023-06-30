import { catsData } from "./data.js"

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

const radioBtnCont = document.getElementById("emotion-radios")

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



