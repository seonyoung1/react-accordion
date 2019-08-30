import React, {useState, useEffect} from 'react';
import Axios from "axios";
import Section from "../components/Section"

const AccordionContainer = () => {
    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [preCount, setPreCount] = useState(0);
    const [count, setCount] = useState(10);
    const size = 10;
    const [isEnd, setIsEnd] = useState(false);
    // const [selected, setSelected] = useState(3);
    const selected = 3;

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try{
            setIsLoading(true);
            const { data : response } = await Axios.get("https://jsonplaceholder.typicode.com/posts");
            const result = response.slice(preCount, count);
            setPreCount(preCount + size);
            setCount(count + size);
            setContent([...content, ...result]);
            if( count >= 50 ){ return setIsEnd(true) }
        } catch(e) {
            console.log(e);
            setError("데이터가 없습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    const onPage = () => {
        getData();
    };

    return (
        <Section
            data={content}
            error={error}
            isLoading={isLoading}
            onPage={onPage}
            isEnd={isEnd}
        />
    );
};

export default AccordionContainer;
