const ShopNav = ({ categories }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
              {categories.map((cat) => (
                <li class="nav-item">
                  <button>{cat}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ShopNav;
