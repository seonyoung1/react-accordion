import React from 'react';
import styled from "styled-components";
import Loader from "./Loader";
import Accordion from "../components/Accordion";

const Wrap = styled.div`
    width:100%;max-width:768px;margin:30px auto;text-align:center;
`;
const Button = styled.button`
    padding:10px 20px;background-color:#fd79a8;border-radius:5px;color:#fff;font-size:16px;margin:20px 0;
    ${props => {
        if( props.isEnd ){
            return `display:none;`;
        }
    }}
`;

const Section = ({ loading, data, error, isEnd, onPage }) => {
    return (
        <Wrap>
            {loading ? <Loader /> :
                <>
                    <ul>
                        {data.map(item =>
                            <Accordion
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                body={item.body}
                                dangerouslySetInnerHTML={{ __html: item.body }}
                            />
                        )}
                        {error && <li style={{textAlign:"center"}}>{error}</li>}
                    </ul>
                    <Button type="button" isEnd={isEnd} onClick={onPage}>More</Button>
                </>
            }
        </Wrap>
    );
};

export default Section;
