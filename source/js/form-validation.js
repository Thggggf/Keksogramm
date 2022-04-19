const inputHashtag = document.querySelector(".text__hashtags")
const inputDescription = document.querySelector(".text__description")
const HASHTAG_MAX_LENGTH = 20

inputHashtag.addEventListener("input", () => {

  if (inputHashtag.validity.tooLong) {
    inputHashtag.setCustomValidity(`Длина хэштега не должна превышать 20 символов, включая решётку!, удалите ${inputHashtag.value - HASHTAG_MAX_LENGTH} симв.`)
    inputHashtag.reportValidity()
  } else if (inputHashtag.value[0]) {
    inputHashtag.setCustomValidity("Первым знаком должен быть '#' !")
    inputHashtag.reportValidity()

  } else if (inputHashtag.value.length = 1) {
    inputHashtag.setCustomValidity("Хештег не может состоять только из знака '#' !")
    inputHashtag.reportValidity()


  }
  else {
    inputHashtag.setCustomValidity("")
  }



})



inputDescription.addEventListener("invalid", () => {
  if (inputDescription.validity.tooLong) {
    inputDescription.setCustomValidity("Длина комментария не должна превышать 140 символов!")
  }
  inputHashtag.setCustomValidity("")


})

