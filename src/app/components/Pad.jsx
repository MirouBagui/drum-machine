import React from "react"
import {data} from '../data'
import {Drum} from '../../features/drum/Drum'

const Pad = (props) => {
    let padbank;
     props.bank  ?
    padbank = data.bankOne.map((item, i) => {
        return (
                <Drum 
                volume={props.volume}
                url={item.url}
                id={item.id}
                keyTrigger={item.keyTrigger}
                keyCode={item.keyCode}
                key={i}
                />
              )
            }) : padbank = data.bankTwo.map((item,i) => {
                return (
                    <Drum 
                    volume={props.volume}
                    url={item.url}
                    id={item.id}
                    keyTrigger={item.keyTrigger}
                    keyCode={item.keyCode}
                    key={i}
                    />
                )
            });
    return(     
    <div id="padbank">
        {padbank}
    </div>
    )
        }

export default Pad;