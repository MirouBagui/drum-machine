// thanks to AHMED for the amazing work https://codepen.io/J8ahmed/pen/PBeNJd?editors=0010
import React from 'react';
import './App.scss';
import Pad from './app/components/Pad';
import { changeVolume, selectVolume, selectDisplay, selectBank, selectDark} from './features/drum/drumSlice'
import { useSelector, useDispatch } from 'react-redux';
import {BsFillVolumeUpFill, BsFillVolumeDownFill} from 'react-icons/bs'
import Switch from './app/constants/Switch';

function App() {
  const vol = useSelector(selectVolume);
  const dis = useSelector(selectDisplay);
  const bank = useSelector(selectBank)
  const dark = useSelector(selectDark)
  const dispatch = useDispatch();

  return (
    <div id="drum-machine" className="container-fluid">
      <div className="drum">
          <h1 className="drum__title">Drum Machine</h1>
            <div className="control">
              <div id="display">
                <Switch dark={dark}  />
                <span className='tone'>{dis}</span>
                  <div className='volume'>
                    <p id='volume'>Volume :</p>
                    <BsFillVolumeDownFill size={25}/>
                        <input className='slider' type='range' min='0' max='1' step='0.1' size='smaller' value={vol} onChange={(e) => dispatch(changeVolume(e.target.value))}   />
                    <BsFillVolumeUpFill size={25}/>
                  </div>
              </div>
                <div className='vl' />
            <Pad bank={bank} volume={vol}/>
           </div>
          </div>
        </div>
  );
}

export default App;
