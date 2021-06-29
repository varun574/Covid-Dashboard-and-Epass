import React, { Component } from 'react'
import { Container, Table,Card,Button,Row,Col } from 'react-bootstrap'
class TableView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tableinfo:[],
             searchClicked:false,
             message:'',
             showCard:true,
             data:{},
             total_cases:'',
             today_cases:'',
             deaths:'',
             recovered:'',
             total_tests:'',
             active_cases:''
        }
    }
    
    componentDidMount(){
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then(response=>response.json())
        .then(response=>this.setState({tableinfo:response}))
            // .then(response=>{
            //     var temp=new Map();
            //     var arr=[]
            //     var obj;
            //     var str;
            //     this.state.tableinfo.map(Temp=>{
            //         console.log(Temp)
            //         // Temp.country=T
            //         // temp.set(Temp.country,{cases:"1"})
            //         obj=temp
            //         if(obj.country!=null)
            //         obj.country_name=obj.country.toLowerCase()
            //         // str=Temp.country
            //         arr.push(obj)
            //         // arr[arr.length-1].country=str.toLowerCase()
            //     })
            //     console.log(arr)
            //     this.setState({
            //         tableArray:arr
            //         // tableMap:temp
            //     },()=>{console.log(this.state.tableArray)})
                
            // })
    }



    enterrows=()=>{
        // console.log(this.state.tableinfo[0]);
        delete this.state.tableinfo[0];
        return this.state.tableinfo.map(cou=>{
            return (
                <tr key={cou.country} style={{borderBottom:'1px solid #55ACEE'}}>
                    <td style={{borderBottom:'1px solid white'}}>
                        {cou.country}
                    </td>
                    <td style={{borderLeft:'2px solid white'}}>
                        {cou.cases}
                    </td>
                    <td>
                        {cou.todayCases}
                    </td>
                    <td>
                        {cou.deaths}
                    </td>
                    <td>
                        {cou.todayDeaths}
                    </td>
                    <td>
                        {cou.recovered}
                    </td>
                    <td>
                        {cou.active}
                    </td>
                    <td>
                        {cou.totalTests}
                    </td>
                </tr>
            )
        })
    }

Buttonhandler=()=>{
var name=document.getElementById("search").value
this.setState({
    showCard:false
})
this.state.tableinfo.map(row=>{
    if(name===row.country)
        {
            this.setState({
                data:row,
                total_cases:row.cases,
                today_cases:row.todayCases,
                recovered:row.recovered,
                deaths:row.deaths,
                active:row.active,
                total_tests:row.totalTests,
                searchClicked:true,
                showCard:true,
                message:name
            })
        }
    
})
}

    render() {
        // console.log( this.state.tableMap.get("India").cases)
       return(
           <div>

<br></br>
<br></br>

                <Row>
                    <Col sm="8"></Col>
                    <Col>
                    <input id="search" type="text" style={{width:'300px',height:'40px',fontSize:'20px',marginLeft:'50px'}} placeholder="Search..."></input>      
               
                    <button type="button" onClick={this.Buttonhandler} style={{width:'50px',height:'40px',border:'none',backgroundColor:'white'}}><i class="fa fa-search" style={{fontSize:'24px'}}></i></button>
           
                    {/* <button type="button" onClick={this.Buttonhandler} style={{width:'100px',height:'40px',fontSize:'20px',marginLeft:'5px'}}>Submit</button> */}
                     </Col>
                     {/* <Col></Col> */}
                </Row>
               
                <br></br>
                <Row>
                    <Col ></Col>
                <Col>

                    {(this.state.searchClicked && this.state.message && this.state.showCard)?
                       <Card style={{width:'800px'}}>
                           <Card.Header>
                              <b style={{fontSize:'25px',textAlign:'center',marginLeft:'310px'}}>{this.state.message}</b> 
                               <Button style={{float:'right',color:'red'}} variant="active" onClick={()=>{this.setState({searchClicked:false})}}><b>X</b></Button>
                           </Card.Header>   
                           <Card.Body style={{fontSize:'20px'}}>
                                <Row>
                                    <Col >
                                        <p className="text-info" style={{display:'inline'}}>Total Cases : </p>
                                        {this.state.total_cases}
                                    </Col>
                                    <Col>
                                        <p className="text-warning" style={{display:'inline'}}>Active Cases : </p>{this.state.active}
                                    </Col>
                                    <Col>
                                       <p className="text-success" style={{display:'inline'}}>Recovered : </p> {this.state.recovered}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                      <p className="text-danger" style={{display:'inline'}}> Deaths : </p>{this.state.deaths}
                                    </Col>
                                    <Col >
                                      <p className="text-primary" style={{display:'inline'}}> Today Cases : </p>{this.state.today_cases}
                                    </Col>
                                    <Col >
                                     <p className="text-dark" style={{display:'inline'}}> Total Tests :  </p>{this.state.total_tests}
                                    </Col>
                                </Row>
                           </Card.Body>
                       </Card>
                    :""}
                    </Col>
                    <Col ></Col>
                </Row>
                <br></br>
                <br></br>





               <br></br>
               {/* <Container> */}
               <div style={{marginLeft:'10px',marginRight:'10px'}}>
               <Table striped bordered hover variant="active" >
                   <thead className="bg-primary"   style={{color:'white',fontSize:'18px',textAlign:'center',fontStyle:'italic'}}>
                       <tr>
                           <td style={{border:'2px solid white',width:'250px'}}>
                               Country
                           </td>
                           <td  style={{border:'2px solid white'}}>
                               Total Cases
                           </td>
                          
                           <td  style={{border:'2px solid white'}}>
                               Today Cases
                           </td>
                           <td  style={{border:'2px solid white'}}>
                               Total Deaths
                           </td>
                           <td  style={{border:'2px solid white'}}>
                               Today Deaths
                           </td>
                           <td  style={{border:'2px solid white'}}>
                               Total Recovery
                           </td>
                           <td  style={{border:'2px solid white'}}>
                               Active Cases
                           </td>
                           <td>
                               Total Tests
                           </td>
                       </tr>
                   </thead>
                   <tbody>
                       {this.enterrows()}
                   </tbody>
               </Table></div>
               {/* </Container> */}
           </div>
       )
       
    }
}

export default TableView
