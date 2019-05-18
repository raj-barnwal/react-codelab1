import React from 'react';

import { user } from './../Data';

const Header = () => (
    <div className="header">
        Welcome
        <span className="user-name">
            {user.name}
        </span>
    </div>
);

export default Header;
