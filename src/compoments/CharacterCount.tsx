import React from 'react';
import {useRecoilValue} from "recoil";
import {charCountState} from "../store/homeState";

export const CharacterCount = () => {
    const count = useRecoilValue(charCountState);

    return <>Character Count: {count}</>;
}
