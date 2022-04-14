import _ from "lodash"
const isStringLength = function (str, maxLength) {
  return (str.length <= maxLength)
}

const arrayLengthAndValueRandomize = function (arr) {
  return arr.arrayRandomizer().slice(0, _.random(0, arr.length, false))
}


const arrayRandomizer = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array

}
const isEscEvent = (evt) => {
  return evt.key === ("Escape" || "Esc")
}


export { isStringLength, arrayRandomizer, isEscEvent, arrayLengthAndValueRandomize }
