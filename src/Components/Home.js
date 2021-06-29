import React, { Component } from 'react'
import {Card, Container,Row,Col,i} from 'react-bootstrap'
import WorldMap from './WorldMap'
import WorldMap1 from './WorldMap1'
 class Home extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              apiResponse:[],
              fetchResponse:[],
              first:''
         }
     }
     
     callApi(){
         fetch("https://coronavirus-19-api.herokuapp.com/all")
         .then(response=>response.json())
         .then(response=>this.setState({apiResponse:response}));
        console.log(this.state.apiResponse);
     }
     callApi2(){
        fetch("https://covid-19-data.p.rapidapi.com/report/country/name?name=Italy&date=2020-04-01", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
// .then(response=>{
//     this.fetchApi();
// })
.catch(err => {
	console.error(err);
});
     }
    fetchApi(){
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then(response => response.json())
        .then(response => { this.setState({ fetchResponse: response }) })
        .then(response=>{this.setState({first:this.state.fetchResponse[0]})})
        .then(response => { console.log(this.state.fetchResponse) })
        }

     componentDidMount(){
         this.callApi();
         this.fetchApi();
        //  this.callApi2();
        //  this.callApi3();
     }
    render() {
        console.log(this.state.first)
        //  Object.entries(this.state.fetchResponse[0]).forEach(([key,value])=>{
        //     console.log(key+" "+value);
        //  })
       
        return (
            <div style={{backgroundColor:'',height:'100%'}}>
            
               <br></br><br></br>
               <h2 style={{marginLeft:'60px'}}><i className="fa fa-globe" style={{fontSize:'36px'}}></i>  Covid DashBoard</h2>
                
                <WorldMap1></WorldMap1>0
                    <br></br>
                    <div >
                        
                         <br></br>
                         <h3 style={{textAlign:'center'}}>World Covid Statistics</h3>
                         <br></br>
              <Card style={{width:'1100px',marginLeft:'160px'}}>
                <Card.Header>
                <Row>
                    <Card style={{width:'21rem',height:'7rem',marginLeft:'20px'}} className="bg-info">
                    {/* <Card.Header style={{textAlign:'center',color:'white'}} className="bg-info"  >Total Cases</Card.Header> */}
                    <h3 style={{textAlign:'center',color:'white',fontSize:'40px',marginTop:'10px'}} className="bg-info" >{(this.state.apiResponse.cases/1000000).toFixed(2)} M+</h3>
                    <p style={{textAlign:'center',color:'white',fontSize:'18px'}} className="bg-info">Total Cases</p>
                    {/* <br></br> */}
                    {/* <Card.Body style={{textAlign:'center',color:'white'}}  ></Card.Body> */}
                    </Card>
                
                <Card style={{width:'21rem',height:'7rem',marginLeft:'20px'}} className="bg-warning">
                    {/* <Card.Header  style={{textAlign:'center'}}> Active</Card.Header> */}
                    <h3  style={{textAlign:'center',color:'white',fontSize:'40px',marginTop:'10px'}}>{((this.state.first.active)/1000000).toFixed(2)}  M+</h3>
                    <p style={{textAlign:'center',color:'white',fontSize:'18px'}} >Active</p>
                   </Card>
                
                   <Card style={{width:'21rem',height:'7rem',marginLeft:'20px'}} className="bg-primary">
                    {/* <Card.Header  style={{textAlign:'center'}} > Deaths</Card.Header> */}
                    <h3  style={{textAlign:'center',color:'white',fontSize:'40px',marginTop:'10px'}} >{(this.state.first.casesPerOneMillion)} </h3> 
                    <p style={{textAlign:'center',color:'white',fontSize:'18px'}}>Cases per Million</p>
                  
                    </Card>
                    
                </Row>
                <br></br><br></br>
                
                <Row>
                
                    <Card style={{width:'21rem',height:'7rem',backgroundColor:'#00CC44',marginLeft:'20px'}} >
                    {/* <Card.Header  style={{textAlign:'center'}}> Recovered</Card.Header> */}
                    <h3  style={{textAlign:'center',color:'white',fontSize:'40px',marginTop:'10px'}}>{(this.state.apiResponse.recovered/1000000).toFixed(2)} M+</h3>
                    <p style={{textAlign:'center',color:'white',fontSize:'18px'}} >Recovered</p>
                  </Card>
                
                    <Card style={{width:'21rem',height:'7rem',marginLeft:'20px'}} className="bg-danger">
                    {/* <Card.Header  style={{textAlign:'center'}} > Deaths</Card.Header> */}
                    <h3  style={{textAlign:'center',color:'white',fontSize:'40px',marginTop:'10px'}} className="bg-danger">{(this.state.apiResponse.deaths/100000).toFixed(2)} L+</h3> 
                    <p style={{textAlign:'center',color:'white',fontSize:'18px'}} className="bg-danger">Deaths</p>
                  
                    </Card>
                    <Card style={{width:'21rem',height:'7rem',marginLeft:'20px',backgroundColor:'#FF8C1A'}} >
                    {/* <Card.Header  style={{textAlign:'center'}} > Deaths</Card.Header> */}
                    <h3  style={{textAlign:'center',color:'white',fontSize:'40px',marginTop:'10px'}} >{(this.state.first.deathsPerOneMillion)} </h3> 
                    <p style={{textAlign:'center',color:'white',fontSize:'18px'}}>Deaths per Million</p>
                  
                    </Card>
                    
                </Row>
                </Card.Header>
              </Card>
                </div>
                {/* <WorldMap></WorldMap> */}
            </div>
            
        )
    }
}

export default Home
