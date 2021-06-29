import React,{Component} from'react'
import emailjs from 'emailjs-com';
import firebase   from '../util/firebase'
import {Button, Col, Container, Form, FormGroup, ProgressBar, Row,Card} from 'react-bootstrap';
import tracking from '../tracking1.png'
import styles from '../styles1.css'
import accepted from '../accepted.webp'
import pending from '../pending1.jpg'
import rejected from '../rejected.webp'
class Tracking extends Component{
    constructor(props){
        super(props)
        this.state={
            epass:[],
            result:"",
            image:"",
            comment:""
        }
    }
    componentDidMount(){
        const ref=firebase.database().ref("covid")
        ref.on("value",(snapshot)=>{
            const epasses=snapshot.val()
            const forms=[]
            for (let id in epasses) {
                forms.push({id,...epasses[id]})
            }
            this.setState({
                epass:forms
            },()=>{console.log(this.state.epass)})
        })
    }
    toggle=(e)=>{
        var temp=document.getElementById("blur")
        temp.classList.toggle('active')
        var popup=document.getElementById("popup")
        popup.classList.toggle('active')
        this.state.epass.map((form,index)=>{
            if(this.state.epass[index].ReferenceId===document.getElementById("ref").value){
                if(this.state.epass[index].TrackingStatus){
                    if(this.state.epass[index].Status=="accepted"){
                    this.setState({
                        image:accepted,
                        comment:"Your E-pass has been approved.Please check your mail"
                    })
                    }
                    else{
                        this.setState({
                            image:rejected,
                            comment:"Your E-pass has been rejected.Please check your mail"
                        }) 
                    }
                }
                else{
                    this.setState({
                        image:pending,
                        comment:"Kindly please wait for further notice."
                    },()=>{
                        document.getElementById("ref").value=""
                    })
                }
            }
        })
    }
    check=()=>{
        var temp=document.getElementById("cont")
        temp.classList.toggle('active')
        
    }
    render(){
        return (
            <div>
            <div className="contain" id="blur" style={{padding:"100px 50px 150px 50px",backgroundColor:"#cce6ff"}}>
                <h1>Check your E-pass application status here </h1><br></br><br></br>
            <Row>
                <Col sm={6} style={{height:"400px"}}>
                    <Card>
                        {/* <Card.Header></Card.Header> */}
                        <img src={tracking}></img>
                    </Card>
                </Col>
                {/* <Col sm={1}></Col> */}
                <Col sm={6} style={{backgroundColor:"#2b5797",padding:"50px 30px 40px 30px",height:"365px"}}>
            <Card >
                <Card.Header></Card.Header>
                <Card.Body style={{backgroundColor:"white",height:"250px"}}>
            <Form>
                
                <Form.Group>
                <Form.Label htmlFor="ref" style={{fontSize:"25px"}}><h2>Enter reference id</h2></Form.Label>
                <Form.Control id="ref" name="ref" type="text" placeholder="Enter reference id"></Form.Control>
                </Form.Group><br></br>
                <Button style={{float:"right"}} onClick={this.toggle}>Check</Button>
            </Form>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            </div>
            <div>
            <Card id="popup" >
                
                <Card.Body>
                <Button id="close" variant="danger" style={{float:"right",zIndex:"1"}} onClick={this.toggle}><i class="fa fa-close"></i></Button>
                    
                         <img src={this.state.image} style={{width:"550px",height:"300px",zIndex:"-1"}}></img>
                
                </Card.Body>
                <Card.Footer>
                    <h4>{this.state.comment}</h4>
                </Card.Footer>
            </Card>
            </div>
            </div>
        )
    }
}
export default Tracking