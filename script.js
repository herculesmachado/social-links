const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=theme]')

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)


// Objeto com as cores originais, assim que o modo dark é desativado ele volta para este padrão de cores
const initialColors = {
    bgBody: getStyle(html, '--body-bg-color'),
    bgPurple: getStyle(html, '--purple-litter-dark'),
}

//Objeto que recebe as cores quando é ativado a modo dark
const darkMode = {
    bgBody: "#1c1c1c",
    bgPurple: '#bb99dd'
}

const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
         html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener('change', ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
