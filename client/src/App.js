import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import NavBar from './components/NavBar'
import { Constructor } from '@babel/types';
import {useState} from "react";
 //this should call the api
Constructor(props) {
  super(props);
  this.state = {
    items:[],
    isLoaded: false,
  }

}

componentDidMount() {
  fetch('https://rescuegroups.org/manage/public_apikey_edit?ak=Kj0RT2J0&t=HBMa7f573cqrRTp')
  .then(res => res.json())
  .then(json => {
    this.setState({
      isLoaded:true,
      items: json,
  })
 })
}
render(){
  const { isLoaded } = this.state;

  if (!isLoaded){
    return(
      <div classname ="App">
        <ul>
          {items.map(item =>(
            <li key = {item.id}>
             name: {item.name} 
             type: {item.type}|

            </li>
          ))};
        </ul>
      </div>
    );
  }
}

//it ends here



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

function App() {
  return (
    //provider for apolloclient for graphql
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={()=> <ShopPage shopItems={dummy}/>} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
