import React from 'react';
import styled from "styled-components";
import { useAccordion } from "../hooks";

const AccItem = styled.li`
    width:100%;max-width:768px;margin:0 auto;text-align:left;border-bottom:1px solid #6c5ce7;
    .title{
        position:relative;width:100%;font-size:18px;text-align:left;padding:15px 40px 15px 10px;
        .icon{
            position:absolute;top:50%;right:15px;font-size:0;
            &::before,
            &::after{content:"";position:absolute;left:0;top:0;width:10px;height:2px;background-color:#6c5ce7;}
            &::after{transform:rotate(270deg);transition:transform .3s ease;}
        }
    }
    .content{
        overflow:hidden;height:0;transition: height .3s ease;
        > div{padding:15px 10px;}
    }
    &:first-child{border-top:1px solid #6c5ce7;}
    &.active{
        background-color:#eee;
        .title .icon{
            &::after{transform:rotate(0);}
        }
        .content{
            height:auto;
        }
    }
`;

const Accordion = ({ id, title, body }) => {
    const { active, height, text, list, content, toggle } = useAccordion();
    return (
        <AccItem className={`item${id} ${active}`}>
            <button className="title" data-index={id} onClick={()=>toggle(id)} ref={list}>
                <p>{id} {title}</p>
                <span className="icon">{text}</span>
            </button>
            <div className="content"
                 ref={content}
                 style={{height : `${height}`}}
            >
                <div>{body}</div>
            </div>
        </AccItem>
    );
};

export default Accordion;
