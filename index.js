/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import App from './src';
import {name as appName} from './app.json';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./src/store/rootReducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

global.XMLHttpRequest = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest;
global.FormData = global.originalFormData
    ? global.originalFormData
    : global.FormData;


if (window.__FETCH_SUPPORT__) {
    // it's RNDebugger only to have
    window.__FETCH_SUPPORT__.blob = false;
} else {
    /*
     * Set __FETCH_SUPPORT__ to false is just work for `fetch`.
     * If you're using another way you can just use the native Blob and remove the `else` statement
     */
    global.Blob = global.originalBlob ? global.originalBlob : global.Blob;
    global.FileReader = global.originalFileReader
        ? global.originalFileReader
        : global.FileReader;
}

AppRegistry.registerComponent(appName, () =>
    class MainScreen extends Component {

        render(){
            return(
                <Provider store={store}>
                    <App />
                </Provider>
            )
        }
    }


);
