import Search from '../src/App';
import {
    createCustomElement,
    DOMModel,
    byAttrVal
} from '@adobe/react-webcomponent';

class SearchModel extends DOMModel {
    @byAttrVal() text = 'something';
}

const SearchCustomElement = createCustomElement(
    Search,
    SearchModel,
    'container'
);

window.customElements.define('search-component', SearchCustomElement);
