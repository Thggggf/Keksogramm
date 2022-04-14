import { generateRandomPhotoCards} from "./data.js"

const imagesContainerElement = document.querySelector("#pictures-container")
const pictureTemplateElement = document.querySelector("#picture").content

const randomPhotos = generateRandomPhotoCards()


const renderRandomPhotos = function () {
  const renderRandomPhotoFragment = document.createDocumentFragment()
  randomPhotos.forEach(({ url, likes, comments }) => {
    const pictureElement = pictureTemplateElement.cloneNode(true)
    pictureElement.querySelector(".picture__img").setAttribute('src', url)
    pictureElement.querySelector(".picture__likes").textContent = likes
    pictureElement.querySelector(".picture__comments").textContent = comments.length

    renderRandomPhotoFragment.appendChild(pictureElement)
  });
  imagesContainerElement.appendChild(renderRandomPhotoFragment)

}
renderRandomPhotos()
