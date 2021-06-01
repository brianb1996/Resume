import React , {useEffect}from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import {BrowserRouter, Route} from 'react-router-dom'
import Interests from './containers/Interests'
import Skills from './containers/Skills'
import Education from './containers/Education'
import Experience from './containers/Experience'
import About from './containers/About'

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }
  
  // Render this somewhere using:
  // <Route path="..." children={<LongContent />} />
  const ScrollHere = () => {
    return (
      <div>
        <ScrollToTopOnMount />
      </div>
    );
  }

const RouteStyle ={
    marginLeft: '250px'
}

const AppContainer = () =>{
    return(
        <>  
        <BrowserRouter>
            <NavBar/> 
        </BrowserRouter>          
        </>
    )

}

ReactDOM.render(<AppContainer/>, document.querySelector('#root'))


{/* <BrowserRouter>
<NavBar/>
<Route style={RouteStyle} exact path='/' component={About}/>
<Route style={RouteStyle} exact path='/Experience' component={Experience}/>
<Route style={RouteStyle} exact path='/Education' componenet={Education}/>
<Route style={RouteStyle} exact path='/Skills' component={Skills}/>
<Route style={RouteStyle} exact path='/Interests' component={Interests}/>
</BrowserRouter> */}