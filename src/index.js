import 'regenerator-runtime'
import jumbotron from './jumbotron.js';
import navbar from './navbar.js'
import footer from './footer.js'
import './style.css'
console.log('Hello World');

window.addEventListener('load', () => {
    const app = document.querySelector('#app');
    app.appendChild(new navbar());
    app.appendChild(new jumbotron());
    app.appendChild(new footer());
});