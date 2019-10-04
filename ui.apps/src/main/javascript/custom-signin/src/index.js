import React from 'react';
import ReactDOM from 'react-dom';

import { CommerceApp } from 'cif-core-components/src/components';
import AccountManagement from './components/AccountManagement';

const App = () => {
    console.log(`Initializing app...`);
    return (
        <CommerceApp>
            <AccountManagement />
        </CommerceApp>
    );
};

window.onload = function() {
    ReactDOM.render(<App />, document.getElementById('account_management_root'));
};
