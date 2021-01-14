import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import HomePage from './pages/Home'
import Footer from './components/footer'
import Membership from './pages/Membership'
function App() {
  return (
    <Router>
      <div className="App">
        {/* TODO: Add navbar component */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/company">About the Company</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/pricing"><Membership></Membership></Route>
        </Switch>
        
{/*         
        <Box mb={10}>
        </Box>
        <Box mb={10}>
          <Differences/>
        </Box>
        <Box mb={10} textAlign="center">
          <Membership/>
        </Box>
        <Box mb={10} textAlign="center"> 
        <Aboutus/>
        </Box>
        <Container>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <ContactForm/>
          </Box>
          
        </Container> */}
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
