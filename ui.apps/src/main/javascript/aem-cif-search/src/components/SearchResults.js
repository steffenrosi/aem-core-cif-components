/*******************************************************************************
 *
 *      Copyright 2019 Adobe. All rights reserved.
 *      This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *      you may not use this file except in compliance with the License. You may obtain a copy
 *      of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *      Unless required by applicable law or agreed to in writing, software distributed under
 *      the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *      OF ANY KIND, either express or implied. See the License for the specific language
 *      governing permissions and limitations under the License.
 *
 *
 ******************************************************************************/
import React, {useEffect} from 'react';

import {useQuery} from '@magento/peregrine';

import PRODUCT_SEARCH from './queries/ProductSearch.graphql';

function extractQueryParam(queryString) {
    const params = queryString.split('&');
    const query = params.find(item => item.startsWith('q='));
    if (!query) {
        return '';
    }
    let variables = query.split('=');
    return variables.length > 0 && variables[1];
}

const SearchResults = () => {
    const queryString = window.location.search;
    let message = '';
    let queryParam = '';
    if (queryString.length === 0) {
        message = `No query string, no results for you`;
    } else {
        queryParam = extractQueryParam(queryString.substring(1));
    }

    const [queryResult, queryApi] = useQuery(PRODUCT_SEARCH);
    const {data, error, loading} = queryResult;
    const {resetState, runQuery, setLoading} = queryApi;

    useEffect(() => {
        if (queryParam) {
            setLoading(true), runQuery({variables: {inputText: queryParam}});
        } else {
            resetState();
        }
    }, [runQuery, setLoading, queryParam]);

    return (
        <div>
            {message}
            {data && (
                <ul>
                    {data.products.items.map(item => {
                        console.log(`found`);
                        return <li key={item.id}>{item.name}</li>;
                    })}
                </ul>
            )}
        </div>
    );
};
export default SearchResults;
