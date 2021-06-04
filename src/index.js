import React , {useEffect}from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import Interests from './containers/Interests'
import Skills from './containers/Skills'
import Education from './containers/Education'
import Experience from './containers/Experience'
import About from './containers/About'


const AppContainer = () =>{
    return(
            <NavBar/> 
    )

}

ReactDOM.render(<AppContainer/>, document.querySelector('#root'))


/* <BrowserRouter>
<NavBar/>
<Route style={RouteStyle} exact path='/' component={About}/>
<Route style={RouteStyle} exact path='/Experience' component={Experience}/>
<Route style={RouteStyle} exact path='/Education' componenet={Education}/>
<Route style={RouteStyle} exact path='/Skills' component={Skills}/>
<Route style={RouteStyle} exact path='/Interests' component={Interests}/>
</BrowserRouter> */



