import Card from '../components/Card'
// import Footer from '../components/Footer'

const Pets = ({ AvailablePets }) => {
    //this is the shop page
    return <div>
        <h1>Available Adoptees</h1>
    <div className= "card-grid grid--4 grid__item grid-container">
        {AvailablePets.map((data) => <Card {...data} />)}
    </div>
    </div>
   

}

export default Pets;