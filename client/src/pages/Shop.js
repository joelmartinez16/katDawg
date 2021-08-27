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

const Shop = ({ ShopItems, featured2, setFeatured2 }) => {
  //this is the shop page
  return (
    <div>
       <ShopNav categories={categories} />
    <div className="mb-5 p-3">
      <h1>Shop</h1>
      <div className="row" style={{ width: "95%", margin: "auto" }}>
        <div className="col-3">
         
          <Card {...featured2} featured2 size={40}/>
        </div>
        <div className="col-7 offset-1">
        <div className="row">
        {ShopItems.map((item, i)=> <div key={i} className="col-4"><Card setFeatured2={setFeatured2} {...item} index={i} maxImgHeight={120} size={18}/></div>)}
        </div>
       
        </div>

      </div>
    </div>
    </div>
  );
};

export default Shop;
