import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Navbar from './components/Navbar'

import HomePage from './pages/Home'
import Footer from './components/footer'
import Membership from './pages/Membership'
import Company from './pages/CompanyPage'
function App() {
  return (
    <Router>
      <div className="App">
        {/* TODO: Add navbar component */}
        <Navbar/>
        
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path ="/company">
            <Company/>
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
