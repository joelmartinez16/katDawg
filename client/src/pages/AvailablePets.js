import Card from '../components/Card'
import React, { useEffect, useState } from 'react'
import { fetchToken, getAnimalsByType } from '../util/API'

const Pets = () => {
    //this is the shop page
    const [token, setToken] = useState(null);
    const [pets, setPets] = useState([]);
    const [featured, setFeatured] = useState(0)
    useEffect(async () => {
        const {data} = await fetchToken();
        console.log(data);
        setToken(data.access_token);
        const {data: {animals}} = await getAnimalsByType('dog', data.access_token)
        setPets(animals);
        console.log(animals[0]);
        setFeatured(animals[featured]);
    }, []);


    return <div className="mb-5 p-3">
        <h1>Available Pets</h1>
        <div className="row" style={{ width: "95%", margin: "auto" }}>
            <div className="col-3">
                <Card {...featured} featured size={40} />
            </div>
            <div className="col-7 offset-1">
                <div className="row">
                    {pets.map((item, i) => <div key={i} className="col-4"><Card setFeatured={setFeatured} {...item} index={i} maxImgHeight={120} size={18} /></div>)}
                </div>
            </div>
        </div>
        {/* {shopItems.map((data) => <Card {...data} />)} */}
    </div>
}

export default Pets;