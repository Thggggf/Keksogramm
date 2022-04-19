import noUiSlider from "nouislider"
require('nouislider/distribute/nouislider.css');

const sliderElement = document.querySelector(".effect-level__slider")
const valueElement = document.querySelector(".effect-level__value")

const createSlider = function () {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: "lower",
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value
        }
        return value.toFixed(1)
      },
      from: function (value) {
        return parseFloat(value)
      },
    },
  })
}
createSlider()
let sliderExists = true;

let tempCustomProps = {
  filter: null,
  postFix: null,
};

let checkedBtn;

const radioButtons = document.querySelector('input[name="effect"]')
radioButtons.addEventListener("change", (evt) => {
  if (sliderExists ? false : true) { createSlider() }
  tempCustomProps.filter = null
  tempCustomProps.postFix = null
  if (!evt.target.checked) {
    return

  }
  let checkedBtn = evt.target;

  if (evt.target == document.querySelector(".effects__preview--chrome")) {
    tempCustomProps.filter = "grayscale"
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,

      },
      step: 0.1,
    })
  } else if (evt.target == document.querySelector(".effects__preview--sepia")) {
    tempCustomProps.filter = "sepia"
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,

      },
      step: 0.1,
    })
  } else if (evt.target == document.querySelector(".effects__preview--marvin")) {
    tempCustomProps.filter = "invert"
    tempCustomProps.postFix = "%"
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,

      },
      step: 1,
    })
  } else if (evt.target == document.querySelector(".effects__preview--phobos")) {
    tempCustomProps.filter = "blur"
    tempCustomProps.postFix = "px"
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,

      },
      step: 0.1,
    })
  } else if (evt.target == document.querySelector(".effects__preview--heat")) {
    tempCustomProps.filter = "brightness"
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,

      },
      step: 0.1,
    })
  }
  sliderElement.noUiSlider.destroy()
  let sliderExists = false;

})


sliderElement.noUiSlider.on("update", (values, handle) => {
  valueElement.value = values[handle]
  const editableImage = document.querySelector(".img-upload__preview-inner")
  editableImage.removeAttribute("filter")
  editableImage.setAttribute("filter", `${tempCustomProps.filter}(${value}${tempCustomProps.postFix})`)
})




