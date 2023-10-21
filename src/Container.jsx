import React, { useState } from 'react';

export function Container({ children, title }) {
    const [collapsed, setCollapsed] = useState(false)

    const handleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div className="container">
            {<button onClick={handleCollapsed}><h2>{title}</h2></button>}
            {collapsed ? null : children}
        </div>
    );
}

