import {Fragment, useContext} from "react";
import {Link, Outlet} from "react-router-dom";
import {ReactComponent as PenguinLogo} from "../../assets/penguin.svg";
import {UserContext} from "../../context/user.component";

import './navigation.styles.scss'
import {signOutUser} from "../../utils/firebase/firebase.util";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <PenguinLogo className='logo' style={{width: 50, height: 50}}/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link>{
                        currentUser ? (
                                <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                            )
                            : (
                                <Link className='nav-link' to='/sign-in'>
                                    SIGN IN
                                </Link>
                            )
                    }</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}
export default Navigation