import React from "react";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import data from "../data/db.json";


function Home(){
  return(
    <>
    <Header/>
    <Tours tours={data}/>
    <Footer/>
    </>
  )
}

export default Home;