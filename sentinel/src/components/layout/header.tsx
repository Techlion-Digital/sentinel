import MainMenu from "../ui/mainMenu";
import logo from '../../assets/images/sentinel.svg';

function Header() {
    return (
        <div id="header" className="header">
            <img src={logo} alt="logo" className="logo" />
            <MainMenu />
        </div>
    );
}

export default Header;