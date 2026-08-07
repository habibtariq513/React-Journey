function customRender(reactElement, Container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    
}

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