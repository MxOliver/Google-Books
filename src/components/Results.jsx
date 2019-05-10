import React, { Component } from 'react';
import {
    MDBCardGroup, MDBCardBody, MDBCardTitle, MDBContainer, MDBCard
 } from 'mdbreact';

class ResultsPage extends Component {

    render() {
        const results = this.props.results;

        const res = [];

        for(let i in results){
            console.log(results[i]);
            // results[i].map(e => {
            //     res.push(
            //         <MDBCard>
            //             <MDBCardTitle>{e.volumeInfo.title}</MDBCardTitle>
            //             <MDBCardBody>
            //                 <p>{e.volumeInfo.authors}</p>
            //             </MDBCardBody>
            //         </MDBCard>
                    
            //     )
            // })
        }

        return (
            <MDBCardGroup>
                        
            </MDBCardGroup>
        )
    }

}

export default ResultsPage;