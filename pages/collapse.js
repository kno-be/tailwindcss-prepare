import React, { useState } from 'react';
import Header from 'next/head';
import { Collapse, Button, CardBody, Card } from 'reactstrap';




export default function Cllpsby() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <div>
        <Header>
        </Header>
        <div class="p-0">
        <a href="/"><button className="bg-black w-full text-white border-2 mb-5">HOME</button></a>
                    <div class="flex-col h-full w-64 mx-auto ">
                        <button type="button" className="flex bg-black  h-8 w-8" onClick={toggle}></button>
                        <div className={
                          !isOpen ? "h-80 w-full border-4 border-black bg-white"
                          : "hidden"
                        }>
                        
                        </div>
                        <button type="button" className="flex bg-pink-800  h-8 w-8" onClick={toggle}></button>

                    </div>
        </div>
              
    </div>
      
    
  )
}
