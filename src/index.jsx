// import { Fragment } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Main from './components/Main'


const root = createRoot(document.querySelector("#root"));
root.render(
    <>
        <Header/>
        <Main/>
    </>
)
