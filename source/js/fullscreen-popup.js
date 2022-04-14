import { isEscEvent } from "./util"
import { generateRandomPhotoCards, randomPhotoCard } from "./data"
const pictureTemplateElement = document.querySelector("#picture").content
const pictureElement = pictureTemplateElement.cloneNode(true)
const fullScreenElement = document.querySelector(".big-picture.overlay")
const cancelFullScreenElement = document.querySelector("#picture-cancel")

const onPopupEscPress = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault()
    closeFullScreen()

  }

}

const commentTemplateElement = document.querySelector("#comment")
const commentsLoad = document.querySelector(".comments-loader")
const descriptionElement = document.querySelector(".social__caption")
const fullScreenComments = document.querySelector(".social__comment-count")
const fullscreenLikes = document.querySelector(".social__likes")

const renderFullScreen = function () {
  const renderCommentsFragment = document.createDocumentFragment()
  const renderDescriptionsFragment = document.createDocumentFragment()
  const commentsListElement = document.querySelector("social__comments")
  const comments = randomPhotoCard.comments
  const commentsPreviewQty = Math.ceil(comments.length / 2)
  const commentsPreview = comments.slice(0, commentsPreviewQty - 1)
  commentsPreview.forEach((el, i => {
    const element = document.createElement("li")
    element.textContent = el
    renderCommentsFragment.append(element)

  }))
  commentsLoad.addEventListener("click", () => {
    const commentsLoaded = comments.slice(-(commentsPreviewQty - 1))
    commentsLoaded.forEach((el, i) => {
      const element = document.createElement("li")
      element.textContent = el
      renderCommentsFragment.append(element)
    })
  })

  fullScreenComments.textContent = `${commentsPreviewQty} из ${comments.length} комментариев`
  fullscreenLikes.textContent = `Нравится ${randomPhotoCard.likes}`
  const description = randomPhotoCard.description
  descriptionElement.textContent = description
  descriptionElement.textContent = description

}









const openFullScreen = () => {
  fullScreenElement.classList.remove("hidden")
  document.addEventListener("keydown", onPopupEscPress)
  renderFullScreen()


}

const closeFullScreen = () => {
  fullScreenElement.classList.add("hidden")
  document.removeEventListener("keydown", onPopupEscPress)

}

pictureElement.addEventListener("click", openFullScreen)

cancelFullScreenElement.addEventListener("click", closeFullScreen)









