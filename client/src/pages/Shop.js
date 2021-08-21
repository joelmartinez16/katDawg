import Card from '../components/Card'
const Shop = ({ shopItems }) => {
    //this is the shop page
    return <>
        <h1>Shop Page</h1>
        {shopItems.map((data) => <Card {...data} />)}
    </>
}

export default Shop;