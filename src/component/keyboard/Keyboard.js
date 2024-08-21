import React, { useState } from 'react'
import './keyboard.css';

const Keyboard = () => {
    const [inputText, setInputText]=useState('');
    const [isShift, setIsShift]=useState('false');
    const [isCaps, setIsCaps]=useState('false');


    const handleKeyClick=(key)=>{
        if(key ==='Enter'){
            handleEnterKey();
        }
        else if(key===' '){
            handleSpaceKey();
        }
        else if(key==='Tab'){
            handleTabKey();
        }
        else if(key ==='<i className="fa-solid fa-delete-left"></i>'){
            handleDeleteKey();
        }
        else if(key==='Shift'){
            handleShiftKey();
        }
        else if(key ==='Caps Lock'){
            handleCapsLock();
        }
    }

    const handleEnterKey=()=>{
        const newContent = inputText +'\n'
        setInputText(newContent);
    }

    const handleSpaceKey=()=>{
        const newContent = inputText +' '
        setInputText(newContent);
    }

    const handleTabKey=()=>{
        const newContent = inputText +'\t'
        setInputText(newContent);
    }
    const handleDeleteKey=()=>{
     if(inputText.length===0){
        return;
     }
      const newContent = inputText.slice(0,inputText.length-1);
      setInputText(newContent);
    }
    const handleShiftKey = () => {
        const updatedShift = !isShift;
        setIsShift(updatedShift);
        const keys = document.querySelectorAll('.key');
        keys.forEach((key) => {
            const firstSpanElement = key.querySelector('span:first-child');
            if (firstSpanElement) {
                const keyText = firstSpanElement.innerText.toLowerCase();
                if (!['shift', 'alt', 'ctrl', 'enter', 'caps lock', 'tab'].includes(keyText)) {
                    firstSpanElement.innerText =
                    ((updatedShift && isCaps) || (!updatedShift && !isCaps))
                    ? keyText.toLowerCase() : keyText.toUpperCase();
                }
                if (keyText === 'shift') {
                    firstSpanElement.parentElement.style.backgroundColor =
                    (updatedShift) ? 'blue' : '#445760';
                }
            }
        });
    }
    const handleCapsLock = () => {
        const updatedCaps = !isCaps;
        setIsCaps(updatedCaps);
        const keys = document.querySelectorAll('.key'); //selects all the keys from class key
        keys.forEach((key) => {
            const firstSpanElement = key.querySelector('span:first-child');
            if (firstSpanElement) {
                const keyText = firstSpanElement.innerText.toLowerCase();
                if (!['shift', 'alt', 'ctrl', 'enter', 'caps lock', 'tab']
                    .includes(keyText)) {
                    firstSpanElement.innerText =
                    ((updatedCaps && isShift) || (!updatedCaps && !isShift))
                    ? keyText.toLowerCase() : keyText.toUpperCase();
                }
                if (keyText === 'caps lock') {
                    firstSpanElement.parentElement.style.backgroundColor =
                    (updatedCaps) ? 'blue' : '#445760';
                }
            }
        });
    };


  

  return (
<div>
    <div className='Keyboard'>
        <div className='textcontainer'>
            <pre> {inputText}</pre>
        </div> 
        <div className='keyboardcontainer'>
            <div className='container'>
                <div className='row'>
                {['~.`', '!.1', '@.2', '#.3', '$.4', '%.5',
                        '^.6', '&.7', '*.8', '(.9', ').0', '_.-', '+.=',
                        '<i className="fa-solid fa-delete-left"></i>']}

                </div>
            </div>
        </div>
    </div>
 </div>
   
  )
}

export default Keyboard
