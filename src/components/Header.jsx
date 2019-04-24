import React from 'react';
import grain from '../assets/images/grain.png';


function Header(){
  return(
    <div>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Kavivanar');

        .nav {
          color: white;
          background-color: #403D31;
          font-family: 'Kavivanar', cursive;
          font-size: 34px;
          padding: 1em;
          text-align: right;
        }
      `}</style>
      <h1 className="nav">FARMERS ONLY</h1>
      <img src={grain}/>
    </div>
  );
}

export default Header;