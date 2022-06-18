class navbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =

            `
            <a href = "#" >
            <h1>Fiezta Alam Garden</h1>
            </a>
        <ul>
            <li><a href="#">Jasa</a></li>
            <li><a href="#">Artikel</a></li>
            <li><a href="#">Kontak Kami</a></li>
        </ul>
        <div class="btn">
            <button type="button" class="btn btn-primary">Login</button>
            <button type="button" class="btn btn-primary">Daftar</button>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
        </a>
            `;
    }
}
customElements.define('na-bar', navbar);
export default navbar;