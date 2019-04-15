import React from 'react';
//import Diagnosis from './Diagnosis';
import Appointment from './Appointment';
import {Route,Switch} from 'react-router-dom';
import Symptoms from './Symptoms';
import ContactUS from './ContactUS';


class Main extends React.Component{
    render(){
        return(<div><Switch>
            <Route exact path="/" component={Symptoms} />
            <Route exact path="/Appointment" component={Appointment} />
            <Route exact path="/ContactUS" component={ContactUS} />

            </Switch>
            
            </div>);
    }
};

export default Main;