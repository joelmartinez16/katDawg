import React from 'react';
import AboutPage from "../assets/images/AboutPage.jpeg"


const About  = ({ border, header, index, secondary,setFeatured, featured, setFeatured2, featured2,maxImgHeight, details, img, size = 75}) => {
    return <>
      
      <h1 class="aboutH1"> About 🐾</h1>
      <div class="card border-primary mb-3" style={{ maxWidth: `${size}rem`, display: "inline-block"}}>
  <div class="card-header"></div>
  <div class="card-body">
    
    <p class="card-text-center">
      We are organization establishing roots in the adoption community to help unite good people and our furry friends together:

We hope to recruit families for our animals who now live in shelters
We are looking to work with public and private adoption agencies to expand adoption opportunities for animals in their shelter
Providing information and referrals to families interested in adoption
Creating adoption events that bring animals and prospective families together
Partnering with the media to raise public awareness about adoption and encourage interest in animals waiting for adoption
Developing training materials for adoption professionals 
Promoting fairness and equality in the animal welfare field</p>
  </div>
        
      
        <img src={AboutPage} alt="" className= "imgPet">
        </img>
        </div>
        </>
}
export default About;