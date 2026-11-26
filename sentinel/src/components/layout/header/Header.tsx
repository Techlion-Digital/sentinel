import MainMenu from '../../ui/main-menu/MainMenu';
import logo from '../../../assets/sentinel.svg';
import './header.css';

function Header() {
    return (
        <div id="header" className="header">
            <img src={logo} alt="logo" className="logo" />
            <MainMenu />
        </div>
    );
}

export default Header;
