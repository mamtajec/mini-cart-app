const ariaHideDOMChildren = (selector) => {

    const el = select(selector)
    console.log(el.children)

}

const select = (selector, parent = null) => {
    const context = !parent ? document : document.querySelector(parent)
    return context ? context.querySelector(selector) : null
}


export {
    select,
    ariaHideDOMChildren,
}