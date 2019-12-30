import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {App} from "./components/App";
import Routes from "./pages/routes";
import store from "./store";

const ROOT = document.querySelector(".container");

ReactDom.render(
    <Provider store ={store}>

<Routes />
    </Provider>, ROOT
);

// class index extends React.Component {
//     render() {
//         return (
//             <div className='App'>
//                 <Navigation />
//                 <App name="hola" />
//             </div>
//         )
//     }
// }
//
// export default index;