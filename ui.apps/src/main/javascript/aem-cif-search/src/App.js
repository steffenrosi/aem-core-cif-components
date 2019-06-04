import React, {Component, useContext} from 'react';
import ReactDOM from 'react-dom';
import Search from './search';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {ApolloContext} from 'react-apollo/ApolloContext';

const client = new ApolloClient({
    uri: 'http://localhost/magento/graphql'
});
const App = () => {
    return (
        <ApolloContext.Provider value={client}>
            <ApolloProvider client={client}>
                <Search />
            </ApolloProvider>
        </ApolloContext.Provider>
    );
};

export default App;
