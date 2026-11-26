import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './main-menu.css';

function MainMenu() {
    return (
        <div id="main-menu" className="main-menu">
            <ul>
                <li>
                    <a href="#" aria-label="Settings" title="Settings">
                        <FontAwesomeIcon icon={faGear} />
                    </a>
                </li>
                <li>
                    <a href="#" aria-label="Logout" title="Logout">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default MainMenu;
