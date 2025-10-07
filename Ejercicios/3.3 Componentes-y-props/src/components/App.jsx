import 'react'
import '../styles/app.css'

const App = () => {

  return (
   <div>
    <header class="page__header">
    <nav class="menu-header">
        <a href="https://adalab.es/">
            <img src="./images/bars-solid.svg" alt="menu" class="menu-hamburger" />
        </a>
        <ul class="links-menu">
            <li>
                <a href="">Productos</a>
            </li>
            <li>
                <a href="">Colecciones</a>
            </li>
            <li>
                <a href="">Tienda</a>
            </li>
            <li>
                <a href="">Inicio</a>
            </li>
        </ul>
        
    </nav>
    <div class="module-1">
        <h1>Disfruta creando espacios</h1>
        <button class="button">Comprar Ahora</button>
    </div>
</header>

</div>
  )
}

export default App
