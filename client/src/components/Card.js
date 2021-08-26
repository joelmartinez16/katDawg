import React from 'react';

const Card = ({ border, header, index, secondary,setFeatured, featured, setFeatured2, featured2,maxImgHeight, details, img, size = 40 }) => {

    return <>
    <div>
     
        {/* <div className="card-grid"> */}
            <div onClick={()=> setFeatured(index)} className={`card border-${border} mb-3`} style={{ maxWidth: `${size}rem`, display: "inline-block" }}>
                <div className="card-header">{header}</div>
                <img className="card-img-top" height={maxImgHeight || "initial"} src={img} alt="pet_image"/>
                <div className="card-body">
                    <h4 className="card-title">Primary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {featured &&<>
                        <p>Age - {details.age}</p>
                        <p>Breed - {details.breed}</p>
                        <p>temperament - {details.temperament}</p>
                    </>}
                    
                </div>
            </div>

        </div>
    {/* </div> */}
    </>
}
export default Card