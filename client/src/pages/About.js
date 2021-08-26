import React from 'react';
import AboutPage from "../assets/images/AboutPage.jpeg"


const About  = () => {
    return <>
      
      <h1 class="homeH1"> About 🐾</h1>
        <img src={AboutPage} alt="" className= "imgPet">
        </img>
        <p>About Us
    We are organization establishing roots in the adoption community to help unite good people and our furry friends together:

    We hope to recruit families for our animals who now live in shelters
    We are looking to work with public and private adoption agencies to expand adoption opportunities for animals in their shelter
    Providing information and referrals to families interested in adoption
    Creating adoption events that bring animals and prospective families together
    Partnering with the media to raise public awareness about adoption and encourage interest in animals waiting for adoption
    Developing training materials for adoption professionals 
    Promoting fairness and equality in the animal welfare field</p>


      
    </>
}
export default About;