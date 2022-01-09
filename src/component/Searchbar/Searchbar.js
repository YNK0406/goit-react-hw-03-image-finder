import React from "react";
import s from './Searchbar.module.scss'
const SearchBar = () => { 
   return(
   <header className={s.Header}>
  <form className={s.Form}>
    <button type="submit" className={s.Button}>
      <span className={s.Label}>Search</span>
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
)
}


export default SearchBar;
