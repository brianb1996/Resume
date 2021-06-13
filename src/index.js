import React , {useEffect}from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import '@fontsource/roboto';




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



