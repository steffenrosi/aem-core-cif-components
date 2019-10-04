import React from 'react';
import { SignIn as BaseSignIn } from 'cif-core-components/src/components';
import classes from './signin.css';

const SignIn = props => {
    const { showMyAccount } = props;
    return <BaseSignIn classes={classes} showMyAccount={showMyAccount} />;
};

export default SignIn;
