import React, { useState, useEffect } from 'react';
import { UseLocalStorage } from './UseLocalStorage';



export const UseDarkMode = (initialValues) => {
    const [darkMode, setDarkMode] = UseLocalStorage('darkMode', initialValues);

useEffect(() => {
    
    if (darkMode === true){
       document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode')
        };

}, [darkMode])
  

return [darkMode, setDarkMode]
}