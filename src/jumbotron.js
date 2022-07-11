class jumbotron extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
            `
            <div class="jumbotron" id="jumbotrons">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, 
                a simple jumbotron-style component for calling extra 
                attention to featured content or information.</p>
            `;
    }
}
customElements.define('jumbo-tron', jumbotron);
export default jumbotron;