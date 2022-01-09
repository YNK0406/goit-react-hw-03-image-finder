import React from "react";
import SearchBar from "./component/Searchbar/Searchbar";
import Loader from "./component/Loader/Loader";
import ImageGallery from "./component/ImageGallery/ImageGallery";
import Modal from "./component/Modal/Modal";
import Button from "./component/Button/Button";
import Section from "./component/Section/Section";
export default class App extends React.Component {
  state= {
    showModal:false
  };

  // предотвращения перерендоривания
  // shouldComponentUpdate(nextProps, prevState){
  //   return(nextState.showModal !== this.state.showModal;
  //     ) 
  // };
  handleModal =()=>{
    this.setState(({showModal}) => ({showModal: !showModal,}))
  };
  render(){
    const {showModal} = this.state;
    return(
     <>
      <Section>
        <SearchBar/>
      </Section> 
      <Section>
        <ImageGallery/>
        <Button/>
      </Section>
      {showModal &&(
      <Modal onClose={this.handleModal}/>
      )}
      <img   src="" alt="ssssssssss"  onClick={this.handleModal}/>
      <Loader/>
     </> 
    )   
  };
} 
