import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsPage from './Results';
import { MDBContainer, MDBRow, MDBIcon, MDBBtn } from 'mdbreact';

function mapStateToProps(state){
    const { results } = state.search;
    return {
        results
    }
}

class ConnectedLanding extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchParams: {
                name: '',
                type: ''
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const { value, name } = e.target;
        this.setState({ searchParams: {
            ...searchParams,
            [name]: value
        } });
    }

    handleSubmit(e){
        e.preventDefault();
        const { dispatch } = this.props;
        const { searchParams } = this.state;
        dispatch(newSearch(searchParams));
    }


    render(){

        const { results } = this.props;

        return(
            <div className="content">
            <MDBContainer id="searchbar">
            <MDBRow>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="Search"
                    aria-label="search"
                    name="name"
                    onChange={this.handleChange}
                    className="form-control" 
                    />
                <select className="form-control">
                    <option value="inauthor:">Author</option>
                    <option value="inpublisher:">Publisher</option>
                    <option value="intitle:">Title</option>
                    <option value="isbn:">ISBN</option>
                    <option value="lccn:">Library of Congress Control Number</option>
                    <option value="oclc:">Online Computer Library Center Number</option>
                </select>

                <MDBBtn type="submit">Search <MDBIcon icon="search" /></MDBBtn>
                </form>
            </MDBRow>
            </MDBContainer>
            <MDBContainer>
                <ResultsPage results={results} />
            </MDBContainer>
            </div>
        )
    }

}

const Landing = connect(mapStateToProps)(ConnectedLanding);

export default Landing;