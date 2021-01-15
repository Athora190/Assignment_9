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
import ContactForm from './pages/contactForm'
import AboutPage from './pages/About'

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
          <Route path="/about-us"><AboutPage/></Route>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
