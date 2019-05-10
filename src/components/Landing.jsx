import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsPage from './Results';
import { MDBContainer, MDBRow, MDBIcon, MDBBtn, MDBFormInline, MDBCol } from 'mdbreact';
import { searchActions } from '../actions/searchActions';

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
            name: '',
            type: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.formatParams = this.formatParams.bind(this);
    }

    handleChange(e){
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        e.preventDefault();
        const { dispatch } = this.props;
        const { name, type } = this.state;
        console.log(type)
        const formatedParams = {
            name: this.formatParams(name),
            type: type 
        }
        dispatch(searchActions.newSearch(formatedParams));
    }

    formatParams(str){
        let regex = /\s/g;
        if (str.match(regex) !== null) {
            str = str.replace(regex, '+')
        } 
        return str += '+'
    }


    render(){

        const { results } = this.props;

        return(
            <div className="content">
            <MDBContainer id="searchbar" style={{ paddingBottom: '25px', marginBottom: '35px'}}>
            <MDBRow>
            <MDBFormInline onSubmit={this.handleSubmit}>
                <div className="form-group">
                <input 
                    type="text"
                    placeholder="Search"
                    aria-label="search"
                    name="name"
                    onChange={this.handleChange}
                    className="form-control"
                    style={{ marginRight: '10px', width: '355px' }} 
                    />
                    </div>
                    <div className="form-group">
                    <select className="form-control" name="type" value={this.state.type} style={{ width: '150px' }} onChange={this.handleChange}>
                        <option value="">Search by...</option>
                        <option value="inauthor:">Author</option>
                        <option value="inpublisher:">Publisher</option>
                        <option value="intitle:">Title</option>
                        <option value="isbn:">ISBN</option>
                    </select>
                    </div>
                <MDBBtn type="submit" size="sm">Search <MDBIcon icon="search" /></MDBBtn>
                </MDBFormInline>
            </MDBRow>
            </MDBContainer>
            <MDBRow>
                <MDBCol sm="6">
                <ResultsPage results={results} />
                </MDBCol>
            </MDBRow>
            
            </div>
        )
    }

}

const Landing = connect(mapStateToProps)(ConnectedLanding);

export default Landing;