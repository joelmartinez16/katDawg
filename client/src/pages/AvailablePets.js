import Card from '../components/Card'
import Footer from '../components/Footer'

const Pets = ({ AvailablePets }) => {
    //this is the shop page
    return <div className= 'card-grid grid--4 grid__item grid-container' >
        <h1>Available Adoptees</h1>
        {AvailablePets.map((data) => <Card {...data} />)}
    </div>
    
   

}

export default Pets;