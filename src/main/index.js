import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from 'main/App';
import * as serviceWorker from 'main/serviceWorker'
import store from 'main/mainStore'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))

serviceWorker.unregister();
