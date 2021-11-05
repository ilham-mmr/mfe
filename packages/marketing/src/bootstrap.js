import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'
// mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }
    ReactDOM.render(
        <App history={history} />
        , el
    )

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
}

// if we are in dev and in isolation, 
// call mount immedieatly
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}


// we are running through container
// we should export the mount function
export { mount }