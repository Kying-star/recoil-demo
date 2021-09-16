import React from 'react';
import {
  RecoilRoot,
} from 'recoil';
import {TextInput} from "./compoments/TextInput";
import {CharacterCount} from "./compoments/CharacterCount";


function CharacterCounter() {
  return (
      <div>
        <TextInput />
        <CharacterCount />
      </div>
  );
}
export default function App() {
  return (
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
  );
}
