import React from 'react';

export default class Root extends React.Component {
    render() {
        const message = "This was rendered by app 1 which was written in React";
        return (
            <Component  message={message}/>
        );
    }
} ;

const Component = (props) => {
    return (
        <div style={{marginTop: '100px'}}>
            {props.message}
        </div>
    )
}
   