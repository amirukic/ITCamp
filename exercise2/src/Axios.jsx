import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NextUIProvider, Button } from '@nextui-org/react';
import './Axios.css'

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "80bc6450475043df811fa1b5999bc292";

export default function Axios() {
const [article, setArticle] = useState([]);
const [comp,setComp] = useState("q=apple&from=2022-09-08&to=2022-09-08&sortBy=popularity")
function getArticle() {
    axios.get (
    `${BASE_URL}/everything?${comp}&apiKey=${API_KEY}`
)
.then((res) => {
    setArticle(res.data.articles);
});
}

useEffect(()=> {
    getArticle()
},[article])

    return (
        
        <div className='main'>
            <Button.Group size='xl' color='gradient' ghost className='header'>
                <Button onClick={() => {
                    setComp("q=tesla&from=2022-08-09&sortBy=publishedAt");
                    
                }}>Tesla</Button>
                <Button onClick={() => {
                    setComp("q=apple&from=2022-09-08&to=2022-09-08&sortBy=popularity")
                }}>Apple</Button>
                <Button onClick={() => {
                    setComp("domains=wsj.com")
                }}>WSJ</Button>
            </Button.Group>
            {article.map((art) => (
                <div className='newsCard'>
                    <h1>{art.author}</h1>
                    <h3>{art.title}</h3>
                    <h5>{art.description}</h5>
                </div>
            ))}
        </div>
    )
}