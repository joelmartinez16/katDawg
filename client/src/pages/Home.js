import React from 'react';
// import Sleeping from '../assets/images/Sleeping.jpeg'
import '../App.css'

const Home = () => {
    return <>
       
    <h1 class="homeH1">Kat Dawg 🐾 Pet Adoption</h1>
       <img src="images/dog-and-cat.jpeg" alt="" class="imgPet"></img>
         
           <div class="container">
            <div class="center">
            <button type="button" class="btn btn-primary">
            <a className="nav-link active" href="/AvailablePets">Adopt Now</a></button>
            </div>
          </div>

        <h2 class="homeH2">Our Services</h2>
        <p class="statement">We provide an easy website for people looking to add a new pet into their family.
            We also sell pet essentials such as beds, food, and medication to help ease the transition of a
            new loving pet into your home. </p>
      {/* <img src= {Sleeping} alt=""  className= "imgPet"></img> */}
           
    </>
}
export default Home;