import React from 'react';
import '../App.css'

const Home = () => {
    return <>
       
    <h1 class="homeH1">Kat Dawg 🐾 Pet Adoption</h1>
       <img src="../client/public/images/dog-and-cat.jpeg" alt="dog and cat" class="imgPet"></img>
         
         <div class="container">
            <div class="center">
              <button type="button" className="btn btn-secondary">Adopt Now</button>
            </div>
          </div>

        <h2 class="homeH2">Our Services</h2>
        <p class="statement">We provide an easy website for people looking to add a new pet into their family.
            We also sell pet essentials such as beds, food, and medication to help ease the transition of a
            new loving pet into your home. </p>


      
    </>
}
export default Home;