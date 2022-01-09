import React from "react";
import s from './Button.module.scss' 

const Button = () => { 
   return(

    <button type="submit" className={s.Button}>
      <span className={s.Label}>Load more</span>
    </button>


)
}


export default Button;