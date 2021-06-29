import React, { Component } from 'react'
import firebase   from '../util/firebase'
import emailjs from 'emailjs-com';
import {Button, Col, Container, Form, FormGroup, ProgressBar, Row,Toast,Card} from 'react-bootstrap';
import ReactTooltip from 'react-tooltip'
import formpic from '../fomrs1.jpg'
 class EPassForm extends Component {
     constructor(props){
         super(props);
         this.ref=null;
         this.uploadaadhaarref=null;
         this.uploadcovidref=null;
         this.progress1=0
         this.progress2=0
         let mem=(
            <Row key="1">
            <Form.Group as={Col}>
                <Form.Label htmlFor="mem1name">Name</Form.Label>
                <Form.Control type="text" name="mem1name" id="mem1name" placeholder="Enter Name"></Form.Control>
            </Form.Group>
            <Form.Group as={Col} >
                <Form.Label htmlFor="mem1age">Age</Form.Label>
                <Form.Control type="text" name="mem1age" id="mem1age" placeholder="Enter Age"></Form.Control>
            </Form.Group>
            <Form.Group as={Col} >
                <Form.Label htmlFor="mem1phone">Mobile Number</Form.Label>
                <Form.Control type="tel" name="mem1phone" id="mem1phone" placeholder="Enter Mobile Number"></Form.Control>
            </Form.Group>
        </Row>
         )
         this.state={
             memCount:1,
             newMem:[mem],
             aadhaar_card:null,
             covid_report:null,
             user_reg:false,
             registrationType_reg:false,
             regdist_reg:false,
             aadhaar_reg:false,
             gender_reg:false,
             email_reg:false,
             phone_reg:false,
             aadhaar_pic_reg:false,
             caddress_reg:false,
             paddress_reg:false,
             zone_reg:false,
             covid_pic_reg:false,
             regnum_reg:false,
             vehtype_reg:false,
             journey_reg:false,
             purpose_reg:false,
             from_reg:false,
             to_reg:false,
             remarks_reg:false,
             toastshow:false,
             reference_id:""
         }
     }
     componentDidMount(){
        this.ref=firebase.database().ref('covid');
     }
     submit=()=>{
         let agree=document.getElementById("agree");
        //  if(!(this.state.user_reg)||!(this.state.registrationType_reg)||!(this.state.regdist_reg)||!(this.state.aadhaar_reg)||!(this.state.gender_reg)||!(this.state.email_reg)||!(this.state.phone_reg)||!(this.state.aadhaar_pic_reg)||!(this.state.caddress_reg)||!(this.state.aadhaar_card.paddress_reg)||!(this.state.zone_reg)||!(this.state.covid_pic_reg)||!(this.state.regnum_reg)||!(this.state.vehtype_reg)||!(this.state.journey_reg)||!(this.state.purpose_reg)||!(this.state.from_reg)||!(this.state.to_reg)||!(this.state.remarks_reg)){
        //      this.setState({
        //          toastshow:true
        //      })
        //      return;
        //  }
        //  else{
        //      this.setState({
        //          toastshow:false
        //      })
        //  }
         if(!(agree.checked)){
             alert("Pleace accept the agreement");
             return;
         }
         if(this.ref!=null){
            let form_type=["Inter District","Inter State","Intra District","Intra State"];
            let regtype='';
            form_type.forEach( type=> {
                if(document.getElementById(`form-${type}`).checked){
                    regtype=document.getElementById(`form-${type}`).value;
                }
            });
            if(regtype===''){
            alert("Select registration type");
            return;
            }
            let form_state=document.getElementById('form_type_state').value;
            if(form_state===''){
                alert("Select current state or district");
                return;
            }
            let username=document.getElementById('username').value;
            if(username===''){
                alert("Enter Username");
                return;
            }
            let aadhaar=document.getElementById('aadhaar').value;
            if(aadhaar===''){
                alert("Enter aadhaar number");
                return ;
            }
            let genders=['male','female','other']
            let gender='';
            genders.forEach(gen => {
                if(document.getElementById(gen).checked){
                    gender=document.getElementById(gen).value;
                }
            });
            if(gender===''){
                alert("Select gender");
                return ;
            }
            let email=document.getElementById('email').value;
            if(email===''){
                alert("Enter email")
                return;
            }
            let phone=document.getElementById('phone').value;
            if(phone===''){
                alert("Enter Phone Number")
                return;
            }
            let caddress=document.getElementById('caddress').value;
            if(caddress===''){
                alert("Enter Current address")
                return;
            }
            let paddress=document.getElementById('paddress').value;
            if(paddress===''){
                alert("Enter Permanent address")
                return;
            }
            var e=document.getElementById('zone')
            if(e.selectedIndex==0){
                alert("Please select the zone");
                return;
            }
            let zone=e.options[e.selectedIndex].value;

             const applicant={
                 RegistrationType: regtype,
                 PresentState : form_state,
                 UserName: username,
                 Aadhaar : aadhaar,
                 Gender : gender,
                 Email_Id : email,
                 CurrentAddress : caddress,
                 PermanentAddress : paddress,
                 Zone : zone,
                 Mobile:phone
             }

             let vehicleNumber=document.getElementById("vehicle_no").value;
             if(vehicleNumber===''){
                 alert("Enter vehicle number");
                 return;
             }
             e=document.getElementById("vehicle_type");
             if(e.selectedIndex==0){
                 alert("Select Vehicle Type");
                 return;
             }
             let vehicleType=e.options[e.selectedIndex].value;
             e=document.getElementById("journey_type");
             if(e.selectedIndex==0){
                 alert("Select Journey Type");
                 return;
             }
             let journeyType=e.options[e.selectedIndex].value;
             e=document.getElementById("travel_purpose");
             if(e.selectedIndex==0){
                 alert("Select Purpose of Travel");
                 return;
             }
             let purpose=e.options[e.selectedIndex].value;
             let passFrom=document.getElementById("pass_from").value;
             if(passFrom===''){
                 alert("Select Pass From Date");
                 return;
             }
             let passTo=document.getElementById("pass_to").value;
             if(passTo===''){
                 alert("Select Pass TO Date");
                 return;
             }
             let fromState=document.getElementById("from_state").value;
             if(fromState===''){
                 alert("Enter From State");
                 return;
             }
             let toState=document.getElementById("to_state").value;
             if(toState===''){
                 alert("Enter To State");
                 return;
             }
             let remarks=document.getElementById("remarks").value;
             if(remarks===''){
                 alert("Enter Remarks");
                 return;
             }
             const vehicle={
                 VehicleNumber:vehicleNumber,
                 vehicleType:vehicleType,
                 JourneyType:journeyType,
                 Purpose:purpose,
                 PassFrom:passFrom,
                 PassTo:passTo,
                 FromState:fromState,
                 ToState:toState,
                 Remarks:remarks
             }
             var members=[];
             
             for(let i=1;i<=this.state.memCount;i++){
                let name=document.getElementById(`mem${i}name`).value;
                if(name===''){
                    alert(`Enter name of member ${i}`);
                    return;
                }
                let age=document.getElementById(`mem${i}age`).value;
                if(age===''){
                    alert(`Enter age of member ${i}`);
                    return;
                }
                let mphone=document.getElementById(`mem${i}phone`).value;
                if(mphone===''){
                    alert(`Enter phone of member ${i}`);
                    return;
                }
                const member={
                     Member : i,
                     Name: name,
                     Age: age,
                     Phone: mphone
                 }
                 members.push(member)
             }
             const Members={
                 MemberDetails:members
             }
                var aadhaarURL=null;
                var covidURL=null;
             this.uploadaadhaarref=firebase.storage().ref(`aadhaar/${this.state.aadhaar_card.name}`).put(this.state.aadhaar_card)
             this.uploadaadhaarref.on('state_changed',(snapshot)=>{
                 this.progress1=Math.round(snapshot.bytesTransferred/snapshot.totalBytes)*100;
             },
             (error)=>{
                 alert(error);
             },
             ()=>{
                 firebase.storage().ref('aadhaar').child(this.state.aadhaar_card.name).getDownloadURL().then((url)=>{
                    console.log(this.state.aadhaar_card.name+" "+url); 
                    aadhaarURL=url;
                 }).then(()=>{
                     console.log(this.state.covid_report)
                    this.uploadcovidref=firebase.storage().ref(`covid/${this.state.covid_report.name}`).put(this.state.covid_report)
                    this.uploadcovidref.on('state_changed',(snapshot)=>{
                        this.progress2=Math.round(snapshot.bytesTransferred/snapshot.totalBytes)*100;
                    },
                    (error)=>{
                        alert(error);
                    },
                    ()=>{
                        firebase.storage().ref('covid').child(this.state.covid_report.name).getDownloadURL().then((url)=>{
                           console.log(this.state.aadhaar_card.name+" "+url); 
                           covidURL=url;
                        }).then(()=>{
                            const Epass={
                                ApplicantDetails:applicant,
                                VehicleDetails:vehicle,
                                MembersTravelling:Members,
                                AadhaarURL:aadhaarURL,
                                CovidURL:covidURL,
                                TrackingStatus:false,
                                ReferenceId:this.state.reference_id,
                                Status:"pending"
                            }
                            console.log(Epass)
                            this.ref.push(Epass);
                        }).then(()=>{
                            window.location.reload();
                        })
                    })
                 })
             })
             
         }
         else{
             alert("Firebase Connection Invalid");
         }
     }
    addMember=()=>{
        if(this.state.memCount<=3){
            this.setState((prevState)=>{
                return { memCount:prevState.memCount+1}
            },()=>{
                console.log(this.state.memCount)
            let mem= (
                <Row key={this.state.memCount}>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor={`mem${this.state.memCount}name`}>Name</Form.Label>
                        <Form.Control type="text" name={`mem${this.state.memCount}name`} id={`mem${this.state.memCount}name`} placeholder="Enter Name"></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor={`mem${this.state.memCount}age`}>Age</Form.Label>
                        <Form.Control type="text" name={`mem${this.state.memCount}age`} id={`mem${this.state.memCount}age`} placeholder="Enter Age" pattern="[0-9]{2}"></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor={`mem${this.state.memCount}phone`}>Mobile Number</Form.Label>
                        <Form.Control type="tel" name={`mem${this.state.memCount}phone`} id={`mem${this.state.memCount}phone`} placeholder="Enter Mobile Number"></Form.Control>
                    </Form.Group>
                </Row>
            )
            this.setState({
                newMem:[...this.state.newMem,mem]
            },()=>{console.log(this.state.newMem)})
            })
            
        }
    }
    removeMember=(event)=>{
        if(this.state.memCount>0){
        // event.preventDefault();
        console.log("In remove member")
        const m=this.state.newMem;
        m.pop();
        this.setState((prevState)=>{
            return {  memCount:prevState.memCount-1,
                    newMem:m
            }
        },()=>{console.log(this.state.newMem)})
        
    }
        // console.log(this.newMem
    }
    generate=(e)=>{
        e.preventDefault()
        let string="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnoprstuvwxyz"
        var random_string=""
        for(let i=0;i<10;i++){
         random_string+=string.charAt(Math.floor(Math.random()*string.length))
        }
        this.setState({
        reference_id:random_string
        })
        return random_string
    }
    sendEmail=(e)=> {
        e.preventDefault()
        if(!(this.state.user_reg)||!(this.state.email_reg)){
            alert("Please check name and email.")
            return
        }
        let  refid=this.generate(e);
         e.target.message.value=`Your Epass form has been registered successfully.Please use this reference id : ${refid} to track the status of your application`
        e.target.user_email.value=""+document.getElementById("email").value
        e.target.user_name.value=""+document.getElementById("username").value 
        console.log(e.target.user_name.value)
        console.log(e.target.user_email.value)
        console.log(e.target.message.value)
        console.log(e.target)
        emailjs.sendForm('service_4qf4xs5', 'template_pjid1gy', e.target, 'user_fBSeNDM76AhjJfVcZYKqz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })        
      }
    handleChange=(event)=>{
        if(event.target.files[0]){
            this.setState({
                aadhaar_card:event.target.files[0]
            },()=>{
                this.setState({
                    aadhaar_pic_reg:true
                })
            })
        }
    }
    handleChange2=(event)=>{
        if(event.target.files[0]){
            console.log(event.target.files)
            this.setState({
                covid_report:event.target.files[0]
            },()=>{
                this.setState({
                    covid_pic_reg:true
                })
            })
        }
    }
    nameHandler=(event,id)=>{
        
        let regex=/^[a-zA-Z\s]+$/
        // console.log(event.target)
        if(!(regex.test(event.target.value))){
            this.setState({
                user_reg:false
            })
            ReactTooltip.show(id)
            // event.target.setCustomValidity("Name should consist of only alphabets , eg Akash")
        }
        else{
            this.setState({
                user_reg:true
            })
            ReactTooltip.hide(id)
            // document.getElementById("feed1").style.backgroundColor="red"
        }
        // event.target.setCustomValidity(msg);
    }

    registrationTypeHandler=()=>{
        this.setState({
            registrationType_reg:true
        })
    }
    regDistHandler=(event)=>{
        let regex=/^[a-zA-Z\s]+$/
        if(!(regex.test(event.target.value))){
            console.log(event.target)
            this.setState({
                regdist_reg:false
            })
            ReactTooltip.show(event.target)
        }
        else{
            this.setState({
                regdist_reg:true
            })
            ReactTooltip.hide(event.target)
        }
    }
    aadhaarHandler=(event)=>{
        let regex=/^(\d{4})(-?)(\d{4})(-?)\d{4}$/
        if(!(regex.test(event.target.value))){
            this.setState({
                aadhaar_reg:false
            })
            ReactTooltip.show(event.target)
        }
        else{
            this.setState({
                aadhaar_reg:true
            })
            ReactTooltip.hide(event.target)
        }
    }
    genderHandler=()=>{
        this.setState({
            gender_reg:true
        })
    }
    emailHandler=(event)=>{
        let regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!(regex.test(event.target.value))){
            this.setState({
                email_reg:false
            })
            ReactTooltip.show(event.target)
        }
        else{
            this.setState({
                email_reg:true
            })
            ReactTooltip.hide(event.target)
        }
    }
    phoneHandler=(event)=>{
        let regex=/^(\+)?(91)?([0-9]{9,10})$/
        if(!(regex.test(event.target.value))){
            this.setState({
                phone_reg:false
            })
            ReactTooltip.show(event.target)
        }
        else{
            this.setState({
                phone_reg:true
            })
            ReactTooltip.hide(event.target)
        }
    }
    currentAddHandler=(event)=>{
        let regex=/[A-Za-z0-9'\.\-\s\,]+/
        if(!(regex.test(event.target.value))){
            this.setState({
                caddress_reg:false
            })
            ReactTooltip.show(event.target)
        }
        else{
            this.setState({
                caddress_reg:true
            })
            ReactTooltip.hide(event.target)
        }
    }
    permanentAddHandler=(event)=>{
        let regex=/[A-Za-z0-9'\.\-\s\,]+/
        if(!(regex.test(event.target.value))){
            this.setState({
                paddress_reg:false
            })
            ReactTooltip.show(event.target)
        }
        else{
            this.setState({
                paddress_reg:true
            })
            ReactTooltip.hide(event.target)
        }
    }
    zoneHandler=(event)=>{
        var e=document.getElementById('zone')
        if(e.selectedIndex==0){
            this.setState({
                zone_reg:false
            })
        }
        else{
            this.setState({
                zone_reg:true
            })
        }
    }
    regNumberHandler=(event)=>{
        let regex=/^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/
        if(!(regex.test(event.target.value))){
            this.setState({
                regnum_reg:false
            })
            ReactTooltip.show(event.target)
        }
        else{
            this.setState({
                regnum_reg:true
            })
            ReactTooltip.hide(event.target)
        }
    }
    vehtypeHandler=()=>{
        var e=document.getElementById('vehicle_type')
        if(e.selectedIndex==0){
            this.setState({
                vehtype_reg:false
            })
        }
        else{
            this.setState({
                vehtype_reg:true
            })
        }
    }
    journeyHandler=(event)=>{
        var e=document.getElementById('journey_type')
        console.log(event.target)
        if(e.selectedIndex==0){
            this.setState({
                journey_reg:false
            })
        }
        else{
            this.setState({
                journey_reg:true
            })
        } 
    }
    purposeHandler=()=>{
        var e=document.getElementById('travel_purpose')
        if(e.selectedIndex==0){
            this.setState({
                purpose_reg:false
            })
        }
        else{
            this.setState({
                purpose_reg:true
            })
        } 
    }
    fromHandler=(event)=>{
        let regex=/^[A-Za-z\,0-9]+$/
        if(!(regex.test(event.target.value))){
            this.setState({
                from_reg:false
            })
            ReactTooltip.show(event.target)
        }
        else{
            this.setState({
                from_reg:true
            })
            ReactTooltip.hide(event.target)
        }
    }
    toHandler=(event)=>{
        let regex=/^[A-Za-z\,0-9]+$/
        if(!(regex.test(event.target.value))){
            this.setState({
                to_reg:false
            })
            ReactTooltip.show(event.target)
        }
        else{
            this.setState({
                to_reg:true
            })
            ReactTooltip.hide(event.target)
        }
    }
    remarksHandler=(event)=>{
        let regex=/^[A-Za-z\,\.\s]+$/
        if(!(regex.test(event.target.value))){
            this.setState({
                remarks_reg:false
            })
            ReactTooltip.show(event.target)
        }
        else{
            this.setState({
                remarks_reg:true
            })
            ReactTooltip.hide(event.target)
        } 
    }
    render() {
        let form_type=["Inter District","Inter State","Intra District","Intra State"];
        return (
            <div style={{backgroundImage:`url(${formpic})`}}>
                <br></br><br/><br></br>
                <Card style={{width:"1200px",margin:"auto",zIndex:"0.5",padding:"30px 30px 30px 30px"}}>
                <Card.Body style={{margin:"auto"}}><h1 style={{textAlign:'center',display:"inline",fontSize:"70px",marginRight:"50px"}}>E-Pass Application</h1><i class="fa fa-id-card-o" style={{fontSize:"100px"}}></i></Card.Body><br></br><br></br><br></br>
                <Toast onClose={()=>{this.setState({toastshow:false})}} show={this.state.toastshow} delay={3000} autohide>
                    <Toast.Header>
                        <strong style={{margin:"auto"}}>Alert!</strong>
                    </Toast.Header>
                    <Toast.Body>Please re-check the details</Toast.Body>
                </Toast>
                <Form onSubmit={(e)=>{this.sendEmail(e)}}>
                <p>By clicking the below link a reference id will be generated</p>
                <input type="text" name="user_name" style={{visibility:"hidden",width:"0px",height:"0px"}}/>
                <input type="email" name="user_email" style={{visibility:"hidden",width:"0px",height:"0px"}}/>
                <input type="text" name="message" style={{visibility:"hidden",width:"0px",height:"0px"}}/>
                <Button variant="active"  type="submit" style={{border:"1px solid black"}}><i className="fa fa-hand-o-up" style={{fontSize:"30px"}}></i></Button><br></br>
                <Form.Text>Refernce-Id will be sent to your entered email-id.</Form.Text>
                </Form><br></br>
            <Form >
                <Row>
                <Form.Group as={Col}>
                <Form.Label htmlFor="form_type_radio" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Registration Type </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                <Col sm={10}>
                    {form_type.map((type,index)=>{
                        return (<Form.Check inline name="formType" type="radio" label={type} key={index} id={`form-${type}`} value={type} onChange={this.registrationTypeHandler} ></Form.Check>)
                    })}
                </Col>
                {!(this.state.registrationType_reg) ? <Form.Text style={{color:"#d9534f"}} >Please select registration type</Form.Text> : ""}

                </Form.Group>
                <Col sm={1}></Col>
                <Form.Group as={Col} controlId="form_type_state">
                <Form.Label style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Present/Current - District/State </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                <Form.Control  type="text" name="formtype" placeholder="Enter Current district/state" onChange={this.regDistHandler} onMouseLeave={(e)=>{ReactTooltip.hide(e.target)}} onBlur={(e)=>{ReactTooltip.hide(e.target)}} isValid={this.state.regdist_reg} isInvalid={!(this.state.regdist_reg)} required data-tip data-for="regdist"></Form.Control>
                <ReactTooltip id="regdist" type="error" effect="solid" event="change" place="bottom">District name should consist of only alphabets</ReactTooltip>
                </Form.Group>
                </Row><br/><br></br>
                <h3 style={{textAlign:"center",fontSize:"35px",color:"#009B77"}}>Applicant Details</h3><br></br>
                <Row>
                    <Form.Group as={Col} controlId="username">
                        <Form.Label htmlFor="username" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Enter Name </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control ref={ref => this.fooRef = ref} type="text" name="username" placeholder="Enter Name" isValid={this.state.user_reg} isInvalid={!this.state.user_reg} pattern="[a-zA-Z]"  onChange={(e)=>{this.nameHandler(e,this.fooRef)}} onMouseLeave={(e)=>{ReactTooltip.hide(e.target)}} onBlur={(e)=>{ReactTooltip.hide(e.target)}} required data-tip onMouseEnter={()=>{ReactTooltip.hide(this.fooRef)}}></Form.Control>
                        <ReactTooltip  event="change" type="error"  effect="solid"  place="bottom">Name should consist of only aplhabets</ReactTooltip>
                    </Form.Group>
                    <Col sm={1}></Col>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="aadhaar" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Enter Aadhaar Number </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control type="text" name="aadhaar" id="aadhaar" placeholder="Enter Aadhaar Number" onChange={this.aadhaarHandler} onMouseLeave={(e)=>{ReactTooltip.hide(e.target)}} onBlur={(e)=>{ReactTooltip.hide(e.target)}} isValid={this.state.aadhaar_reg} isInvalid={!(this.state.aadhaar_reg)} required data-tip data-for="aadhaartip"></Form.Control>
                        <ReactTooltip id="aadhaartip" type="error" effect="solid" event="change" place="bottom">Please provide proper Aadhaar number i.e 12 digits</ReactTooltip>
                    </Form.Group>
                </Row><br></br>
                <Form.Group controlId="gender" >
                    <Form.Label style={{marginRight:'50px'}} htmlFor="gender" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Gender </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>{' '}
                    <Form.Check inline name ="gender" type="radio" label="Male" id="male" value="Male" onChange={this.genderHandler} style={{marginLeft:"10px"}}></Form.Check>
                    <Form.Check inline type="radio" label="Female" name="gender"  id="female" value="Female" onChange={this.genderHandler}></Form.Check>
                    <Form.Check inline type="radio" label="Other" name="gender" id="other" value="Other" onChange={this.genderHandler}></Form.Check>                
                    <br/>{!(this.state.gender_reg) ? <Form.Text style={{color:"#d9534f"}} >Please select your gender</Form.Text> : ""}    
                </Form.Group><br></br>
                <Row>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="email" style={{fontSize:"20px"}} ><h5 style={{display:"inline"}}>Enter Email-ID </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control type="email" name="email" id="email" placeholder="Enter Email-ID" onChange={this.emailHandler} onKeyPress={this.emailHandler} onMouseLeave={(e)=>{ ReactTooltip.hide(e.target)}} onBlur={(e)=>{ReactTooltip.hide(e.target)}} isValid={this.state.email_reg} isInvalid={!(this.state.email_reg)} required data-tip data-for="emailtip"></Form.Control>
                        <ReactTooltip id="emailtip" type="error" effect="solid" event="change" place="bottom">Please provide proper Email-id eg: yourname@gmail.com</ReactTooltip>
                    </Form.Group>
                    <Col sm={1}></Col>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="phone" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Enter Phone Number </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control type="tel" name="phone" placeholder="Enter Phone Number" id="phone" pattern="[0-9]{10}" onChange={this.phoneHandler} onKeyPress={this.phoneHandler} onMouseLeave={(e)=>{ReactTooltip.hide(e.target)}} onBlur={(e)=>{ReactTooltip.hide(e.target)}} isValid={this.state.phone_reg} isInvalid={!(this.state.phone_reg)} required data-tip data-for="phonetip"></Form.Control>
                        <ReactTooltip id="phonetip" type="error" effect="solid" event="change" place="bottom">Phone number should consist of 9 or 10 digits</ReactTooltip>
                    </Form.Group>
                </Row><br></br>
                <Form.Group  >
                    {/* <ProgressBar animated variant="primary" now={this.progress1} label={`${this.progress1}%`}></ProgressBar> */}
                    <Form.Label htmlFor="photo" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Upload Photo </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                    <Form.Control type="file" name="photo" id="photo" onChange={this.handleChange} style={{marginLeft:"10px"}}></Form.Control><br></br>
                    {!(this.state.aadhaar_pic_reg) ? <Form.Text style={{color:"#d9534f"}} >Please upload your aadhaar photo</Form.Text> : ""}
                </Form.Group><br></br>
                <Row>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="caddress" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Enter Current Address </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control as="textarea" name="caddress" id="caddress" placeholder="Enter Current Address" onChange={this.currentAddHandler} onKeyPress={this.currentAddHandler} onMouseLeave={(e)=>{ReactTooltip.hide(e.target)}} onBlur={(e)=>{ReactTooltip.hide(e.target)}} isValid={this.state.caddress_reg} isInvalid={!(this.state.caddress_reg)} required data-tip data-for="caddresstip"></Form.Control>
                        <ReactTooltip id="caddresstip" type="error" effect="solid" event="change" place="bottom">Please provide address in valid format</ReactTooltip>
                    </Form.Group>
                    <Col sm={1}></Col>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="paddress" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Enter Permanent Address </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control as="textarea" name="paddress" id="paddress" placeholder="Enter Permanent Address" onChange={this.permanentAddHandler} onKeyPress={this.permanentAddHandler} onMouseLeave={(e)=>{ReactTooltip.hide(e.target)}} onBlur={(e)=>{ReactTooltip.hide(e.target)}} isValid={this.state.paddress_reg} isInvalid={!(this.state.paddress_reg)} required data-tip data-for="paddresstip"></Form.Control>
                        <ReactTooltip id="paddresstip" type="error" effect="solid" event="change" place="bottom">Please provide address in valid format</ReactTooltip>
                    </Form.Group>
                </Row><br></br>
                <Row>
                <Form.Group as={Col} >
                    <Form.Label htmlFor="zone" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Select the zone you belong to </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                    <Form.Control as="select" name="zone" id= "zone" onChange={this.zoneHandler}>
                        <option value="Please Select">Please Select</option>
                        <option value="Containment Zone">Containment Zone</option>
                        <option value="Red Zone">Red Zone</option>
                        <option value="Orange Zone">Orange Zone</option>
                        <option value="Green Zone">Green Zone</option>
                    </Form.Control>
                    <br/>{!(this.state.zone_reg) ? <Form.Text style={{color:"#d9534f"}} >Please select the appropriate zones</Form.Text> : ""}
                </Form.Group>
                <Col sm={9}></Col>
                </Row>
                <Row>
                {/* <ProgressBar  variant="primary" now={this.progress2} label={`${this.progress2}%`}></ProgressBar> */}
                    <Form.Group as={Col} >
                    
                        <Form.Label htmlFor="report" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Upload RTPCR/Antigen Test Report </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control type="file" name="report" id="report" onChange={this.handleChange2} style={{marginLeft:"10px"}}></Form.Control>
                        <br/>{!(this.state.covid_pic_reg) ? <Form.Text style={{color:"#d9534f"}} >Please upload the covid report</Form.Text> : ""}
                    </Form.Group>
                </Row><br/><br></br>
                <h3 style={{textAlign:"center",fontSize:"35px",color:"#009B77"}}>Vehicle Information</h3><br></br>
                <Row>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="vehicle_no" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Enter Registration Number </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control type="text" name="vehicle_no" id="vehicle_no" placeholder="Enter Registration Number" onChange={this.regNumberHandler} onKeyPress={this.regNumberHandler} onMouseLeave={(e)=>{ReactTooltip.hide(e.target)}} onBlur={(e)=>{ReactTooltip.hide(e.target)}} isValid={this.state.regnum_reg} isInvalid={!(this.state.regnum_reg)} required data-tip data-for="regnumtip"></Form.Control>
                        <ReactTooltip id="regnumtip" type="error" effect="solid" event="change" place="bottom">Please provide valid registration number</ReactTooltip>
                    </Form.Group>
                    <Col sm={1}></Col>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="vehicle_type" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Enter Vehicle Type </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control as="select" name="vehicle_type" id="vehicle_type" placeholder="Enter Vehicle Type" onChange={this.vehtypeHandler}>
                            <option value="Please Select">Please Select</option>
                            <option value="Two Wheeler">Two Wheeler</option>
                            <option value="Four Wheeler/LMV">Four Wheeler/LMV</option>
                            <option value="Pickup Van/Truck/HMV">Pickup Van/Truck/HMV</option>
                        </Form.Control>
                        {!(this.state.vehtype_reg) ? <Form.Text style={{color:"#d9534f"}} >Please select the appropriate vehicle type</Form.Text> : ""}
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="journey_type" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Journey Type </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control as="select" name="journey_type" id="journey_type" onChange={this.journeyHandler}>
                            <option value="Please Select">Please Select</option>
                            <option value="One Way">One Way</option>
                            <option value="Round Trip">Round Trip</option>
                        </Form.Control>
                        {!(this.state.journey_reg) ? <Form.Text style={{color:"#d9534f"}} >Please select the appropriate journey type</Form.Text> : ""}
                    </Form.Group>
                    <Col sm={1}></Col>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="travel_purpose" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Purpose of Travel </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control as="select" name="travel_purpose" id="travel_purpose" onChange={this.purposeHandler}>
                            <option value="Please Select">Please Select</option>
                            <option value="Medical">Medical</option>
                            <option value="Collection or Distribution of Grocery Goods">Collection or Distribution of Grocery Goods</option>
                            <option value="Government Duty">Government Duty</option>
                            <option value="Other Essentials">Other Essentials</option>
                        </Form.Control>
                        {!(this.state.purpose_reg) ? <Form.Text style={{color:"#d9534f"}} >Please select the appropriate purpose type</Form.Text> : ""}
                    </Form.Group>
                </Row><br></br>
                <Row>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="pass_from" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Pass From Date </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control type="date" name="pass_from" id="pass_from" ></Form.Control>
                    </Form.Group>
                    <Col sm={1}></Col>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="pass_to" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Pass To Date</h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control type="date" name="pass_to" id="pass_to" ></Form.Control>
                    </Form.Group>
                </Row><br></br>
                <Row>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="from_state" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>From(Source of Route) </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control type="text" name="from_state" id="from_state" placeholder="From.." onChange={this.fromHandler} onKeyPress={this.fromHandler} onMouseLeave={(e)=>{ReactTooltip.hide(e.target)}} onBlur={(e)=>{ReactTooltip.hide(e.target)}} isValid={this.state.from_reg} isInvalid={!(this.state.from_reg)} required data-tip data-for="fromtip"></Form.Control>
                        <ReactTooltip id="fromtip" type="error" effect="solid" event="change" place="bottom">Please provide valid From address</ReactTooltip>
                    </Form.Group>
                    <Col sm={1}></Col>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor="to_state" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>To(Destination of Route) </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control type="text" name="to_state" id="to_state" placeholder="To.." onChange={this.toHandler} onKeyPress={this.toHandler} onMouseLeave={(e)=>{ReactTooltip.hide(e.target)}} onBlur={(e)=>{ReactTooltip.hide(e.target)}} isValid={this.state.to_reg} isInvalid={!(this.state.to_reg)} required data-tip data-for="totip"></Form.Control>
                        <ReactTooltip id="totip" type="error" effect="solid" event="change" place="bottom">Please provide valid To address</ReactTooltip>
                    </Form.Group>
                </Row><br></br>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="remarks" style={{fontSize:"20px"}}><h5 style={{display:"inline"}}>Remarks (Reason justifying travel) </h5><span style={{color:"red"}}>*</span>{' '}:</Form.Label>
                        <Form.Control as="textarea" name="remarks" id="remarks" placeholder="Enter valid reasons" onChange={this.remarksHandler} onKeyPress={this.remarksHandler} onMouseLeave={(e)=>{ReactTooltip.hide(e.target)}} isValid={this.state.remarks_reg} isInvalid={!(this.state.remarks_reg)} onBlur={(e)=>{ReactTooltip.hide(e.target)}} required data-tip data-for="remarks"></Form.Control>
                        <ReactTooltip id="remarks" type="error" effect="solid" event="change" place="bottom">Reasons consists of only alphabets and numbers</ReactTooltip>
                    </Form.Group>
                    <Col sm={1}></Col>
                    <Col></Col>
                </Row><br></br><br></br>
                <div>
                <h3 style={{textAlign:"center",fontSize:"35px",color:"#009B77"}}>Members Travelling</h3>
                <br></br>
                <p style={{color:"#7F462C",display:"inline",fontSize:"20px"}}>'+' to add another row , '-' to delete the row</p>
                <i className='fas fa-minus' onClick={this.removeMember} style={{marginLeft:"20px",float:"right"}}></i>
                <i className='fas fa-plus' onClick={this.addMember} style={{marginLeft:"20px",float:"right"}}></i>
                </div>   
                <br></br> 
                    {this.state.newMem.map((mem)=>{
                        return mem;
                    })}
                    
                    <br></br><br></br>
                <h3 style={{color:"#A52A2A"}}>Declaration</h3><br></br>
                <p>
                All the information provided in the form is correct to the best of my knowledge. If any information furnished here is found incorrect or falsely represented, I understand that legal action will be initiated against me.</p> <br/>
                <p>
                I understand that the authorities decide on pass availability and validity and may accept or reject my application without giving any reason thereof. I accept that pass if issued is liable for cancellation as authority may please.
                </p>
                <br/>
                <br></br>
                
                <b><Form.Check type="checkbox" id="agree" name="agree" label="I Agree" ></Form.Check></b>
                <br></br>
                <Button variant="success" type="submit" style={{margin:'auto',display:'block',width:"100px"}} onClick={this.submit}>Submit</Button><br></br>
            </Form> 
            </Card><br></br><br></br>
            </div>
        )
    }
}

export default EPassForm
