import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import './navigation.style.scss';

export const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <CrownLogo className='logo' />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to="/">
                        SHOP
                    </Link>

                    <Link className='nav-link' to="/sign-in">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}