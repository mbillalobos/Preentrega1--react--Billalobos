import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {

    return (
        <header>
            <h1>Li..La.. Limpieza</h1>
            <nav>
                <ul>
                    <li>Sueltos</li>
                    <li>Aerosoles</li>
                    <li>Baldes y mopas</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar