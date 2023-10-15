import { useRef, useEffect } from "react";


export function FocusableInput() {

    const inputRef = useRef("");

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div>
            <input type="text" placeholder="Testo" ref={inputRef} />
        </div>
    )
}