import React, {useState, useEffect} from 'react';
import Axios from "axios";
import Section from "../components/Section"

const AccorContainer = () => {
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [preCount, setPreCount] = useState(0);
    const [count, setCount] = useState(10);
    const addItem = 10;
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try{
            setLoading(true);
            const { data : response } = await Axios.get("http://jsonplaceholder.typicode.com/posts");
            const result = response.slice(preCount, count);
            setPreCount(preCount + addItem);
            setCount(count + addItem);
            setContent([...content, ...result]);
            if( count >= 50 ){ return setIsEnd(true) }
        } catch(e) {
            console.log(e);
            setError("데이터가 없습니다.");
        } finally {
            setLoading(false);
        }
    };

    const onPage = () => {
        getData();
    };

    return (
        <Section
            data={content}
            error={error}
            loading={loading}
            onPage={onPage}
            isEnd={isEnd}
        />
    );
};

export default AccorContainer;
