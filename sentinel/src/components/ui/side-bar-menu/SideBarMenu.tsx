import './side-bar-menu.css';
import { Link } from 'react-router';


function SideBarMenu() {
    return (
        <div id="side-bar-menu" className="side-bar-menu">
            <ul>
                <li><Link to="/" >Dashboard</Link></li>
                <li><Link to="/vulnerabilities">Vulnerabilities</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    );
}

export default SideBarMenu;
