import React from 'react';
import './AppBox.css';

function AppBox(props) {
    return (
        <div className="AppBox">
            {props.children}
        </div>
    );
}

export { AppBox };