import { useState, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll'

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
    // target 에 클릭할 때 마다 list 값을 담고, 로딩됬을 때 target 에 값이 있으면 그거 클릭 redux 로 해야할듯
    // let top = list.current.offsetTop;
    // scroll.scrollTo( top ,{duration: 300, delay: 0});
    // console.log(top);
    return { active, height, text, list, content, toggle };
};