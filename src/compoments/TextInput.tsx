import React from 'react';
import {useRecoilState} from "recoil";
import {textState} from "../store/homeState";

export const TextInput = () => {
    const [text, setText] = useRecoilState(textState);
    const onChange = (event: { target: { value: string | ((currVal: string) => string); }; }) => {
        setText(event.target.value);
    };
    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div>
    );
}
