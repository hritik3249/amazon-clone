import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className='header'>
            <img
                className="header_logo"
                src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png"
            />

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_SearchIcon" />
            </div>

            <div className="header_nav">
                <div className='header_option'>
                    <span className='header__optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign In
                    </span>
                </div>

                <div className='header_option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        Orders
                    </span>
                </div>

                <div className='header_option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header