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

const dummy = [
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

const shopping = [
  {
    border: "primary",
    header: "Adoption basket",
    size: 30
  },
  {
    border: "info",
    header: "Adoption kit"
  },
  {
    border: "danger",
    header: "Ultimate Adoption kit",
    size: 12
  },
]
function App() {
  useEffect(() => {});
    getInfo().then((data) =>{
      console.log(data);
    });
  
  const [text,setText]= useState("Hello World");

  return (
    <>
    <ApolloProvider client={client}>
     
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Home" exact component={HomePage} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Login" exact component={Login} />
          <Route path="/shop" exact component={()=> <ShopPage shopItems={shopping}/>} />
          <Route path="/availablePets" exact component={()=> <PetsPage AvailablePets={dummy}/>} />
        </Switch>
      </Router>
     
    </ApolloProvider>
    <Footer/>
    </>
  );

  }
  
export default App;
