import React, { useState } from 'react';

export function Container({ children, title }) {
    const [collapsed, setCollapsed] = useState(true)

    const handleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div className="container">
            {<button onClick={handleCollapsed}><h2>{title}</h2></button>}
            {collapsed ? false : children}
        </div>
    );
}

