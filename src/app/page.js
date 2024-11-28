"use client"
import React, { useState } from "react";
import Navbar from "./components/Navbar_Components/Navbar";
import Feeds from "./components/Navbar_Components/MainContent/Feeds";
import SideBar from "./components/Navbar_Components/SideContents/SideBar";

export default function Home() {

  const [ count, setCount ] = useState("data")
  
  return (
    <div className="container page_container">
      <Navbar/>

      <div>
        <SideBar/>
        <Feeds cou={count}/>
      </div>
      
    </div> 

  );
}
