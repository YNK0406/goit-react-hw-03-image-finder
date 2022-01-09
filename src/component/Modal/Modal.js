import React,{Component} from "react";
import { createPortal } from "react-dom";
import s from './Modal.module.scss';

const modalRoot =document.querySelector('#modal-root');

export default class Modal extends Component {   
  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown)
  };
  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown)
  };
  handleKeyDown=e=>{
      if(e.code === 'Escape'){
      this.props.onClose();
    }
  };
  handleClickOverlay=e=>{
    if(e.currentTarget === e.target)
    this.props.onClose();
    // console.log(e.target);
    // console.log(e.currentTarget);
  };
  render(){
  return createPortal(
    <div className={s.Overlay} onClick={this.handleClickOverlay}>
    <div className={s.Modal}>
      <h1>adfcadvdavsdavsv </h1><img src="" alt="" />
    </div>
  </div>,
  modalRoot,
);
}}

