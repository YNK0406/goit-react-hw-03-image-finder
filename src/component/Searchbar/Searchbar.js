import React from "react";
import PropTypes from "prop-types";
import s from './Searchbar.module.scss';
import Button from "../Button/Button";


const SearchBar = ({children, 
  // onClick, ...allyProps 
}) => ( 
   <header className={s.Header}>
  <form className={s.Form}>
    <button type="submit" className={s.Button} 
    // onClick={onClick} {...allyProps}
    >
      <span className={s.Label}>
      {children}
      </span>
    </button>

    <input
      className ={s.Input}
      type="text"
      autocomplete="off"
      autofocus='true'
      placeholder="Search images and photos"
    />
  </form>
</header>

);

// Button.defaultProps = {
//   onclick:()=>null,
// children:null,
// };

Button.protoType={
// onclick:PropTypes.func,
children:PropTypes.node,
// 'aria-label':PropTypes.string.isRequired,
};
export default SearchBar;
