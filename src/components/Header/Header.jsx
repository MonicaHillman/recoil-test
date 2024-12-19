import logo from '../../assets/Logo.svg';
import './Header.css';

export default function Header () {
    return (
        <header>
           <img src={logo} alt="Logo"/>
        </header>
    )
}