import * as React from 'react';
import * as ReactDom from 'react-dom';

import {App} from "./components/App";
import Routes from "./pages/routes";

const ROOT = document.querySelector(".container");

ReactDom.render(

<Routes /> , ROOT
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