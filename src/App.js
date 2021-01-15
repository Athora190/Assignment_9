import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Navbar from './components/Navbar/index'

import HomePage from './pages/Home'
import Footer from './components/footer'
import Membership from './pages/Membership'
import Company from './pages/CompanyPage'
import ContactForm from './pages/contact form/contactForm'
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
          <Route path="/pricing"><Membership/></Route>
          <Route path="/contact"><ContactForm /></Route>
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
