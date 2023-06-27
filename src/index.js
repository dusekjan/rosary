import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/index.css"
import {ModeProvider} from "./context/mode";
import {DoneCounterProvider} from "./context/doneCounter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ModeProvider>
        <DoneCounterProvider>
            <App />
        </DoneCounterProvider>
    </ModeProvider>
);
