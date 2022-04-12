import { isStringLength, arrayRandomizer, arrayLengthAndValueRandomize } from './util';
import _ from "lodash"

const generateObjectCards = function (index) {
  return {
    id: randomConf[index],
    url: `photos/.${randomConf[index]}jpg`,
    description: descriptions[_.random(0, descriptions.length - 1, false)],
    likes: _.random(15, 200, false),
    comments: arrayLengthAndValueRandomize(comments),
  }
}

const generateRandomPhotoCards = function (qty) {
  const comments = ["Nice photo!", "Yeah", "I like it", "So nicely", "It's beautiful", "Amazing..", "Nice photo, man", "Powerful!"]
  const descriptions = ["I have a really nice day!", "I'm on vacation", "Expressive!", "By the way, the food here is very good.", "powerfully!", " don't wait for me)))"]
  const randomConf = arrayRandomizer([...Array(qty).keys()])
  const array = [null] * qty
  array.forEach((element, index) => {
    element = generateObjectCards(index)
  });

}

export { generateRandomPhotoCards }
