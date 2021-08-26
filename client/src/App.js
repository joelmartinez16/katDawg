import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import PetsPage from "./pages/AvailablePets";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Signup from './components/SignupForm'
import Login from './pages/Login'
//import { Constructor } from '@babel/types';
import {useState, useEffect} from 'react';
import {getInfo} from './util/API';
import "./App.css"

const client = new ApolloClient({
  uri: "/graphql",
  cache: InMemoryCache
})

const shopping = [
  {
    border: "primary",
    header: "Husky",
    size: 30
  },
  {
    border: "info",
    header: "Puppy"
  },
  {
    border: "danger",
    header: "Bulldog",
    size: 12
  },
]

const AvailablePets = [
  {
    border: "primary",
    header: "Puppy",
    img: "https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
    details: {
      age: 3,
      breed: "corgie",
      temperament: "mild" 
    }
  },
  {
    border: "info",
    header: "Kitten",
    img: "https://imageserver.petsbest.com/marketing/blog/fostering-kittens.jpg",
    details: {
      age: 2,
      breed: "cat",
      temperament: "asshole" 
    }
  },
  {
    border: "danger",
    header: "Rabbit",
    img: "https://static.wixstatic.com/media/nsplsh_45666a3048475064504b73~mv2_d_2560_1920_s_2.jpg/v1/fill/w_1000,h_750,al_c,q_90,usm_0.66_1.00_0.01/nsplsh_45666a3048475064504b73~mv2_d_2560_1920_s_2.jpg",
    details: {
      age: "7 months",
      breed: "furry rabbit",
      temperament: "hyper" 
    }
  },
  {
    border: "primary",
    header: "Puppy2",
    img: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/05/25082143/Alaskan-Malamute-puppy-laying-down-outdoors.jpg",
    details: {
      age: "2 months",
      breed: "husky",
      temperament: "playful" 
    }
  },
  {
    border: "info",
    header: "Kitten2",
    img: "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
    details: {
      age: 11,
      breed: "persian",
      temperament: "senile" 
    }
  },
  {
    border: "danger",
    header: "Rabbit2",
    img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/295E/production/_100209501_istock-678095904.jpg",
    details: {
      age: 4,
      breed: "black rabbit",
      temperament: "chill" 
    }
  },
]
function App() {
  useEffect(() => {});
    getInfo().then((data) =>{
      console.log(data);
    });
  
  const [text,setText]= useState("Hello World");
  const [featured,setFeatured]= useState(AvailablePets[0]);

  const handleSetFeatured = (i) => {
    setFeatured(AvailablePets[i])
  }

  return (
    <>
    <ApolloProvider client={client}>
     
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Home" exact component={HomePage} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Login" exact component={Login} />
          <Route path="/shop" exact component={()=> <PetsPage AvailablePets={AvailablePets}/>} />
          <Route path="/availablePets" exact component={()=> <ShopPage ShopItems={shopping}/>} />
        </Switch>
      </Router>
     
    </ApolloProvider>
    <Footer/>
    </>
  );

  }
  
export default App;
