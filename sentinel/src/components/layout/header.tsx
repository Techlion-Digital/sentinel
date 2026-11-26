import MainMenu from "../ui/mainMenu";
import logo from '../../assets/sentinel.svg';

function Header() {
    return (
        <div id="header">
            <img src={logo} alt="logo" />
            <MainMenu />
        </div>
    );
}

export default Header;