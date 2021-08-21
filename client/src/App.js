import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import NavBar from './components/NavBar'

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
