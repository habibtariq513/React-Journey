cus

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

// Rendering: Addition of an Element with a Root.
// Render function demands two things:
//   - what to render
//   - where to render

// RenderFunc(what to render, where to render)
customRender(reactElement, mainContainer)