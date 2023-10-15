import { useRef, useEffect } from "react";


export function FocusableInput() {

    const isMounted = useRef("");

    useEffect(() => {
        if (!isMounted.current) {
            console.log("component is mounted");
        
            isMounted.current= true; }
    }, []);

    return (
        <div className="content"> Component is mounted!!! </div>
    )
}