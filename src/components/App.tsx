import * as React from "react";



export class App extends React.Component<{}, {}>{
    render() {
        return (

            <div className='test'>
            <h1> Hello </h1>
            </div>
        );
    }
}

interface IProps {
    name: string;
}