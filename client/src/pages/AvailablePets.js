import Card from '../components/Card'

<<<<<<< HEAD
const Pets = ({ AvailablePets }) => {
  //this is the shop page
  return (
    <div>
     <h1>Available Adoptees 🐾 </h1> 
      <ShopNav categories={categories} />
      <div className="card-grid grid--4 grid__item grid-container">
        {AvailablePets.map((data) => (
          <Card {...data} />
        ))}
      </div>
=======
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
>>>>>>> e604e7673065321c75b26511035d6855de04d0d9
    </div>
}

export default Pets;