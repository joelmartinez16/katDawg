import Card from '../components/Card'

const Pets = ({ AvailablePets }) => {
    //this is the shop page
    return <>
        <h1>Available Adoptees</h1>
        {AvailablePets.map((data) => <Card {...data} />)}
    </>
}

export default Pets;