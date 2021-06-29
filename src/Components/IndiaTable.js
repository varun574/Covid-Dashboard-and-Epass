import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
 class IndiaTable extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     enterrows=()=>{
         const covidindia=[]
            for(var key in this.props.data)
            {
                covidindia.push({key,...this.props.data[key]})
                console.log(this.props.data[key]);
            }
            console.log(covidindia);
          return  covidindia.map(statename=>{
                var x=statename
                console.log(x)
                if(x.key==="lastupdated")
                return ''
                return(
                    <tr key={x}>
                                 <td>
                                     {x.key}
                                </td>
                                 <td>
                                     {x.confirm}
                                 </td>
                                 <td>
                                     {x.cured}
                                 </td>
                                 <td>
                                     {x.death}
                                 </td>
        
                           </tr>
                );
            })
            // Object.keys(this.props.data).map(ele=>{
            //     var x=this.props.data[ele]
            //     console.log(x)
            //     return(
            //         <tr key={x}>
            //                      <td>
            //                          {x.state}dalkdj
            //                     </td>
            //                      <td>
            //                          {x.confirm}
            //                      </td>
            //                      <td>
            //                          {x.cured}
            //                      </td>
            //                      <td>
            //                          {x.death}
            //                      </td>
        
            //                </tr>
            //     );
            // })
     }
    render() {
        console.log(this.props.data)
        return (
            <div>
                               <div style={{marginLeft:'10px',marginRight:'10px'}}>
               <Table striped bordered hover variant="active" >
                   <thead className="bg-primary"   style={{color:'white',fontSize:'18px',textAlign:'center',fontStyle:'italic'}}>
                       <tr>
                           <td style={{border:'2px solid white',width:'250px'}}>
                               State
                           </td>
                           <td  style={{border:'2px solid white'}}>
                               Confirmed
                           </td>
                          
                           <td  style={{border:'2px solid white'}}>
                                Cured           
                            </td>
                           <td  style={{border:'2px solid white'}}>
                               Death
                           </td>
                         
                       </tr>
                   </thead>
                   <tbody>
                       {this.enterrows()}
                   </tbody>
               </Table></div>
            </div>
        )
    }
}

export default IndiaTable
