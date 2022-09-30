function Sidebar() {
    return (
        <div className="left-side-menu">

            <div className="slimscroll-menu">

                <div id="sidebar-menu">

                    <ul className="metismenu" id="side-menu">

                        <li className="menu-title">Navigation</li>

                        <li>
                            <a href="index.html">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span> Dashboard </span>
                            </a>
                        </li>
                    </ul>

                </div>

                <div className="clearfix"></div>

            </div>
        </div>  
    );
}
export default Sidebar;