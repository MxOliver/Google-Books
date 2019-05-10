import React, { Component } from 'react';
import {
 MDBCardBody, MDBCardTitle, MDBCard, MDBRow, MDBCol, MDBBtn
 } from 'mdbreact';

class ResultsPage extends Component {

    render() {
        const results = this.props.results;

        const res = [];
        
        if(results){
            results['items'].forEach(e => {
                console.log(e.selfLink)
                if(e.volumeInfo.imageLinks !== undefined && e.volumeInfo.imageLinks.thumbnail !== undefined){
                    res.push(
                        <MDBCard key={e.id} style={{margin: '25px'}}>
                        <MDBCardBody>
                            <MDBRow>
                            <MDBCol>
                            <img src={e.volumeInfo.imageLinks.thumbnail} alt="cover" />
                            </MDBCol>
                            <MDBCol>
                            <MDBCardTitle>
                            <p>{e.volumeInfo.title}</p>
                            </MDBCardTitle>
                            <p>Author(s): {e.volumeInfo.authors} </p>
                            <a href={e.selfLink} target="_blank"><MDBBtn outline color="primary">Find Out More</MDBBtn></a>
                            </MDBCol>
                            </MDBRow>
                        </MDBCardBody>                     
                        </MDBCard>
                    )
                } else {
                    res.push(
                        <MDBCard key={e.id} style={{margin: '25px'}}>
                        <MDBCardBody>
                            <MDBRow>
                            <MDBCol>
                            <svg width="150" height="175" id="no-image">
                                <rect width="130" height="175" style={{fill: "#d3d3d3"}} />
                                <text x="65" y="75" fill="#696969" textAnchor="middle" alignmentBaseline="central">No Image</text>
                                <text x="65" y="98" fill="#696969" textAnchor="middle" alignmentBaseline="central">Found</text>
                            </svg>
                            </MDBCol>
                            <MDBCol>
                            <MDBCardTitle>
                            <p>{e.volumeInfo.title}</p>
                            </MDBCardTitle>
                            <p>Author(s): {e.volumeInfo.authors} </p>
                            <a href={e.selfLink} target="_blank"><MDBBtn outline color="primary">Find Out More</MDBBtn></a>
                            </MDBCol>
                            </MDBRow>
                        </MDBCardBody>                     
                        </MDBCard>
                    )
                }
            })
        } else {
            res.push(
                <p key="1">No books found.</p>
            )
        }

        return (
            <div>
                {res}
            </div>
        )
    }

}

export default ResultsPage;