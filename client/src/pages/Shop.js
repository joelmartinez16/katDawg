import Card from "../components/Card";
// import Footer from '../components/Footer';
import ShopNav from "../components/ShopNav";
const categories = [
    'All',
    'Featured',
    'Adoption Gear',
    'Bundles',
    'Pet Food',
    'Collars',
    'KatDawg Merch'
]

const Shop = ({ ShopItems }) => {
  //this is the shop page
  return (
    <div className="mb-5 p-3">
    <div className="row" style={{width: "95%", margin:"auto"}}>
    <div className="col-3">
      {/* <h1>Available Adoptees</h1> */}
      <ShopNav categories={categories} />
       </div>
      <div className="card-grid grid--4 grid__item grid-container">
        {ShopItems.map((data) => (
          <Card {...data} />
        ))}
      </div>
     
    </div>
    </div>
  );
};

export default Shop;
