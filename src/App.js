
import './App.css';
import {Navbar,NavDropdown,Nav,Form,Button,FormControl, Table} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Population from './Components/Population';
import E_pass from './Components/E_pass';
import TableView from './Components/TableView';
import WorldMap1 from './Components/WorldMap1';
import Statistics from './Components/Statistics';
import { Component } from 'react';
import Tracking from './Components/Tracking';
import WorldMap from './Components/WorldMap';
import India from './Components/India';
class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       worlddata:[]
    }
  }
  


  render(){
  return (
    <div className="App">
     
     
     <script  src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'>
       
     {/* <script></script> */}
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> 
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> 
     <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-metro.css"></link>
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
     </script>
     <Router>
  < Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/" style={{marginLeft:'30px'}}><i className="fa fa-globe" style={{fontSize:'36px'}}></i></Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link href="/" style={{color:'white',marginLeft:'30px'}}>Home</Nav.Link>
        <Nav.Link href="/Components/Population" style={{color:'white',marginLeft:'30px'}}>Population</Nav.Link>
       
        <Nav.Link href="/Components/TableView" style={{color:'white',marginLeft:'30px'}}>Data Table</Nav.Link>
        <Nav.Link href="/Components/Statistics" style={{color:'white',marginLeft:'30px'}}>Statistics</Nav.Link>
        <NavDropdown title={<span style={{color:'white',marginLeft:'30px'}}>Epass</span>} id="navdropdown" style={{color:'white'}} >
          <NavDropdown.Item href="/Components/E_pass" >Apply E-Pass</NavDropdown.Item>
          <NavDropdown.Item href="/Components/Tracking">Track E-Pass</NavDropdown.Item>
        </NavDropdown>  <Nav.Link href="/Components/India" style={{color:'white',marginLeft:'30px'}}>India</Nav.Link>
      

        {/* <Nav.Link href="/Components/testing">Send Message</Nav.Link> */}
    </Nav>
  </Navbar>
   <Switch>
     <Route path="/Components/Population">
       <Population ></Population>
      </Route>
     <Route path="/Components/E_pass">
       <E_pass></E_pass>
     </Route>
     <Route path="/Components/Tracking">
       <Tracking></Tracking>
     </Route>
     <Route path="/Components/TableView">
       <TableView></TableView>
     </Route>
     <Route path="/Components/Statistics">
        {/* <WorldMap></WorldMap> */}
        <WorldMap></WorldMap>
     </Route>
     <Route path="/Components/India">
       <India></India>
     </Route>
     {/* <Route path="/Components/testing">
       <Statistics></Statistics>
     </Route> */}
     <Route path="/">
       <Home></Home>
     </Route>

   </Switch>


</Router>



    </div>
  );
}
}
export default App;
