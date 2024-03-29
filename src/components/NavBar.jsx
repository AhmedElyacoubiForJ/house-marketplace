import { useNavigate, useLocation } from "react-router-dom";

import OfferIcon from "../assets/svg/svg-to-component/OfferIcon";
import ExploreIcon from "../assets/svg/svg-to-component/ExploreIcon";
import PersonOutlineIcon from "../assets/svg/svg-to-component/PersonOutlineIcon";

function NavBar() {
  return (
    <footer className="navbar">
        <nav className="navbarNav">
            <ul className="navbarListItems">
                <li className="navbarListItem">
                    <ExploreIcon fill='#2c2c2c' width='36px' height='36px' />
                    <p>Explore</p>
                </li>
                <li className="navbarListItem">
                    <OfferIcon fill='#2c2c2c' width='36px' height='36px' />
                    <p>Offer</p>
                </li>
                <li className="navbarListItem">
                    <PersonOutlineIcon fill='#2c2c2c' width='36px' height='36px' />
                    <p>Profile</p>
                </li>
            </ul>
        </nav>
    </footer>
  )
}

export default NavBar;
