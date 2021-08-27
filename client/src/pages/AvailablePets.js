import Card from '../components/Card'
// import React, {useEffect} from 'react'

const Pets = ({ Animals, featured, setFeatured }) => {
    //this is the shop page

    return <div className="mb-5 p-3">
        <h1>Available Pets</h1>
        <div className="row" style={{width: "95%", margin:"auto"}}>
            <div className="col-3">
                <Card {...featured} featured size={40}/>
            </div>
            <div className="col-7 offset-1">
                <div className="row">
                    {Animals.map((item, i)=> <div key={i} className="col-4"><Card setFeatured={setFeatured} {...item} index={i} maxImgHeight={120} size={18}/></div>)}
                </div>
            </div>
        </div>
        {/* {shopItems.map((data) => <Card {...data} />)} */}
    </div>
}

export default Pets;