// function customReact(reactElement, mainContaner) {
//     const domElement = document.createElement(reactElement.type)

//     domElement.innerHTML = reactElement.children

//     domElement.setAttribute('target', reactElement.props.target)
//     domElement.setAttribute('href', reactElement.props.hre)

//     mainContaner.appendChild(domElement)

//}
function customReact(reactElement, mainContaner) {

    const domElement = document.createElement(reactElement.type)
      domElement.innerHTML=reactElement.children
        for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
         }

    mainContaner.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank',
    },
    children: 'click me to visit google: '

}


const mainContaner = document.querySelector('#root')

customReact(reactElement, mainContaner)



