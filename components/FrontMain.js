import React from 'react';
import {Route,Switch} from 'react-router-dom';
import ContactUS from './ContactUS';
import Intro from './Intro';
import Symptoms from './Symptoms';
import Appointment from './Appointment';
import Doctor from './Doctor';


class FrontMain extends React.Component{
    render(){
        return(<div><Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/Symptoms" component={Symptoms} />
            <Route exact path="/Appointment" component={Appointment} />
            <Route exact path="/ContactUS" component={ContactUS} />
            <Route exact path="/Doctor" component={Doctor} />
            
            
           

            </Switch>
            
            </div>);
    }
};

export default FrontMain;