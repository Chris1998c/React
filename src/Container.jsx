import React from 'react';

export function Container({ children, title }) {
    return (
        <div className="container">
            {<h2>{title}</h2>}
            {children}
        </div>
    );
}

