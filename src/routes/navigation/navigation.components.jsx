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
                        Shop
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}