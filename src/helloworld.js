import htmlString from './helloworld.html';

class MyCustomElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = htmlString;

        fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => {
                const fact = data.fact;
                this.innerHTML += `<p>${fact}</p>`;
            })
            .catch(error => console.error('Error:', error));
    }
}

window.customElements.define('my-custom-element', MyCustomElement);
