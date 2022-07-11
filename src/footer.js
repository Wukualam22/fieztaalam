class footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =

            `
            <footer id="footer">
                Copyright © 2022 - Fiezta Alam Garden All rights reserved.
            </footer>
            `;
    }
}
customElements.define('fo-oter', footer);
export default footer;