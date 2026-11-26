import './side-bar-menu.css';

function SideBarMenu() {
    return (
        <div id="side-bar-menu" className="side-bar-menu">
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Vulnerabilities</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    );
}

export default SideBarMenu;
