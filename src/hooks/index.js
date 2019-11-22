import { useState, useRef } from 'react';

export const useAccordion = () => {
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [text, setText] = useState("close");
    const content = useRef(null);
    const list = useRef(null);
    const toggle = () => {
        setActive( active === "" ? "active" : "" );
        setHeight( active === "active" ? "0px" : `${content.current.scrollHeight}px` );
        setText( active === "active" ? "close" : "open" );
    };
    return { active, height, text, list, content, toggle };
};