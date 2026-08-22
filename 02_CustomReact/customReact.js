function customRender(reactElement, Container) {
    /*
    Without Loops:
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    // Appending DomElement to Container
    Container.appendChild(domElement) 
    */

    // With Loops:
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    
    for (const p in reactElement.props) {
        if (p === 'children') continue;            
        domElement.setAttribute(p, reactElement.props[p])
    }
    Container.appendChild(domElement) 
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