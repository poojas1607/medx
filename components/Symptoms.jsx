import React, { Component } from 'react';
import Diagnosis from './Diagnosis';

// data will be passed here

class Symptoms extends Component {

    state= {
        fields: {}
    };
    onSubmit = (fields) => {
        this.setState({fields: fields})
    };


    render()
    {
        return (
            <div >
                <Diagnosis onSubmit = {this.onSubmit}/>
                {/*display data in json format*/}
                <h3>{JSON.stringify(this.state.fields)}</h3>

                {/*display value of each property*/}
                <h3>{this.state.fields.name}</h3>
            </div>
        );
    }
}
export default Symptoms