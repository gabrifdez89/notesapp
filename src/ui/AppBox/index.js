import React from 'react';
import './AppBox.css';

function AppBox({ children }) {
    return (
        <div className="AppBox">
            {children}
        </div>
    );
}

export { AppBox };