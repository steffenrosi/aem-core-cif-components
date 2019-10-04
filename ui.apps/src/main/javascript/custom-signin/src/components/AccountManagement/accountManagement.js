import React, { useState } from 'react';
import { useUserContext } from 'cif-core-components/src/context';
import { MyAccount } from 'cif-core-components/src/components';
import SignIn from './signIn';

const AccountManagement = props => {
    const [{ isSignedIn }] = useUserContext();

    const initialView = isSignedIn ? 'MY_ACCOUNT' : 'SIGN_IN';

    const [view, setView] = useState(initialView);

    let content;
    switch (view) {
        case 'SIGN_IN':
            content = (
                <SignIn
                    showMyAccount={() => {
                        console.log(`setting view`);
                        setView('MY_ACCOUNT');
                    }}
                />
            );
            break;
        case 'MY_ACCOUNT':
            content = (
                <MyAccount
                    showMenu={() => {
                        setView('SIGN_IN');
                    }}
                />
            );
    }

    return <div>{content}</div>;
};

export default AccountManagement;
