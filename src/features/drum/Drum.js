import React, { useEffect} from 'react';
import {  useDispatch } from 'react-redux';

import { updateDisplay } from './drumSlice';
export const Drum = (props) => {
    
  const dispatch = useDispatch();

  useEffect(() => {
      document.addEventListener('keydown', handleKey)
  })

  const updateSound = e => {
      let sound = document.getElementById(props.keyTrigger);
      sound.currentTime = 0;
      if (sound) {sound.play(e)} else { return ;} 
  }
  const handleKey = e => {
      if(e.keyCode === props.keyCode) { updateSound(e); dispatch(updateDisplay(props.id))}
  }
  const clips = [].slice.call(document.getElementsByClassName("clip"));
  clips.forEach(element => {
    element.volume = props.volume
  });
  
  return  (
      <div className='drum-pad' id={props.id} onClick={e => {updateSound(e);dispatch(updateDisplay(props.id))}}>
          <p className='pad-tone'>{props.keyTrigger}</p>
          <audio className='clip' src={props.url} id={props.keyTrigger}></audio>
      </div>
  )
  }