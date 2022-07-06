function typeText(element){
    const text = element.innerHTML.split('')
    element.innerHTML = ''
    text.forEach((letter,indice) => {
        setTimeout(() => element.innerHTML += letter , 100 * indice)
    })
}
export {typeText}
