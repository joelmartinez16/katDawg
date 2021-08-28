import React from 'react';

const Card = ({colors,description, status, primary_photo_cropped, border, header, index, age, breeds, secondary,setFeatured, featured, setFeatured2, featured2,maxImgHeight, details, img, size = 40 }) => {

    return <>
    <div>
     
        {/* <div className="card-grid"> */}
            <div onClick={()=> setFeatured(index)} className={`card border-${border} mb-3`} style={{ maxWidth: `${size}rem`, display: "inline-block" }}>
                <div className="card-header">{header}</div>
                <img className="card-img-top" height={maxImgHeight || "initial"} src={primary_photo_cropped?.full} alt="pet_image"/>
                <div className="card-body">
                    <h5 className="card-title">Adoptable Pet</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {featured &&<>
                        <p>Age - {age}</p>
                        <p>Breed - {breeds?.primary}</p>
                        <p>Color - {colors?.primary}</p>
                        <p>Description - {description}</p>
                        <p>Status - {status}</p>
                    </>}
                    
                </div>
            </div>

        </div>
    {/* </div> */}
    </>
}
export default Card