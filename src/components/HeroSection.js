import React, {useRef,useEffect} from "react";
import './HeroSection.css';
import {Link} from "react-router-dom"
import { Button } from './Button';
import { Power3, gsap} from "gsap"
export default function HeroSection (){

 let text=useRef(null);
const tl = gsap.timeline();

useEffect(() => {


    tl.to(text,0.6, {opacity:1,y:0, ease:Power3});
    
  }, []);



  return(
   <div className= "hero-container" id="hero">
      <div className="hero--header" ref={el=> {text=el}}>
    
          <h1>Ars Kreedashala </h1>
          <h3>Every champion was once a contender who refused to give up.</h3>
          <h3>Starts From <span>1<small>Sept</small></span></h3>
          <div className= "hero-btns">
          <Link to='/'>
            <Button buttonStyle="btn--primary" className="btn" buttonSize="btn--large" >Join Now</Button> </Link>
          </div>
          </div>
    </div>
  )
}