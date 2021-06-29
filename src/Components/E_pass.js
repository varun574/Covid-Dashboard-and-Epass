import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import EPassForm from './EPassForm';
import {Container, Form, FormGroup, Row} from 'react-bootstrap';
 class E_pass extends Component {
    render() {
        let form_type=["Inter District","Inter State","Intra District","Intra State"];
       
        return (
            <EPassForm></EPassForm>
        )
    }
}

export default E_pass
