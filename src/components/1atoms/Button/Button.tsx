import React from 'react';

//?--------------IMPORTING STYLED-COMPONENTS to add style by using themself as HTML TAG
import { GhostBtnStyled } from './GhostBtnStyled';
import { BlueBtnStyled } from './BlueBtnStyled';

//* ---------------------type ::GHOST BTN------------------------
//todo:--named export as GhostBtn COMPONENT
export function GhostBtn() {
  return (
    <>
      <GhostBtnStyled>This is a ghost btn styled component</GhostBtnStyled>
    </>
  );
}

//* ---------------------type ::-BLUE BTN------------------------
//todo:--named export as BlueBtn COMPONENT
export function BlueBtn() {
  return (
    <>
      <BlueBtnStyled>This is a blue btn styled component</BlueBtnStyled>
    </>
  );
}
