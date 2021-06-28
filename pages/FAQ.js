import React, { useState } from "react";
import Head from "next/head";
import Question from '../components/collapse/collapse-question'
import data from '../public/data';


export default function FAQPage(props) {
    const [isOpen, setIsOpen] = React.useState(false);



    return(
        <>
        <Head></Head>
        <div className="h-screen w-full bg-gray-600">




        <nav className="fixed-top flex-row h-15 w-full max-w-7x1 bg-black text-white p-4 mb-4 ">

            <div id="main-brand" className="flex pl-4 text-2xl">
                
                <a className="flex mx-auto pl-4 text-2xl">BEKNOLOGIA</a> 

                <div 
                id="nav-desktop"
                className= "hidden md:block md:flex md:justify-center md:mx-auto md:text-white md:text-xl" >
                    <a className="">HOME</a>
                    <a className="px-7">SUPORT</a>
                    <a className="">SERVICES</a>                                      
                    <a className="px-7">ABOUT</a>
                </div>

                <div id="logging" className="hidden md:mx-auto md:mr-auto md:justify-end md:border-2 md:p-1 md:rounded-md">
                <a className="">SIGN IN</a>
                </div>
                
                


                <button  
                id="menu-button-mobile"
                className="ml-auto mr-1 h-8 w-8 bg-green-800 md:hidden"
                onClick={() => setIsOpen(!isOpen)}></button> </div>

                <div 
                id="list-nav-mobile"
                className={isOpen === true ?"flex-col h-full py-4  bg-black" :"hidden"} >
                    <li className=""><a href="/">HOME</a></li>
                    <li className=""><a>SUPORT</a></li>
                    <li className=""><a>SERVICES</a></li>                                       
                    <li className=" pb-7"><a>ABOUT</a></li>

                    <div id="logging" className="p-2 text-center border-4">
                    <a className="">SIGN IN</a>
                    </div>
                </div>

            {/* MOBILE LAYOUT */}

        </nav>







        <section className="bg-gray-200 w-auto m-4 rounded-md max-w-7x1">
            <div className="p-4">
                <h1 className="text-center text-2xl font-bold ">Definitions list:</h1>
            </div>
            <div className="p-4 h-full">
            {data.map((question) => (
            <Question key={question.id} {...question} />
          ))}
            </div>
        </section>


        <section className="bg-gray-200 h-1/3 w-auto m-4 rounded-md max-w-7x1">
            <div className="p-4">
                <h1 className="text-center text-2xl font-bold ">Insert a definition:</h1>
                
                <p className="mt-2">Subject:</p>
                <input type="text" className="w-full"></input>
                <p className="mt-2">Information:</p>
                <textarea rows="" col="50" className="w-full mb-2" type=""></textarea>
                <input type="submit" className="w-full bg-green-600 p-4"></input>
            </div>
            <div className="px-4">
            
            </div>
        </section>
       
        </div>
        <footer></footer>

        </>
    )
}