import React from 'react';

import Result from './Result';
import Diagnosis from './Diagnosis';

const key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBvb2phc2luZ2hhbDE2LnBzQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiNDc4NyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAxOS0wMy0xNCIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNTU1MzI3MjUyLCJuYmYiOjE1NTUzMjAwNTJ9.RAP_NI-c8kEIZ6bSyQU_1xd_bd7HinmuvhI9hYbZnAA';

class Symptoms extends React.Component {
    state = {
        isLoading: true,
        users: [],
        error: null,

    };
    getWeather = async (e) => {   // async is used for asynchornous call to api
        e.preventDefault();

// taking value from FORM.jsx
        const age = e.target.elements.YOB.value;
        const  gender = e.target.elements.Gender.value;

        // API calling
        const api_call = await fetch(`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[9,10,11]&gender=${gender}&year_of_birth=${age}&token=${key}&format=json&language=en-gb`);
        const data = await api_call.json();

        //consoling data
        console.log(data);
        console.log(gender);
        console.log(age);

        //defining the state
        this.setState({
                            users: data,
                            isLoading: false,
                        })


    };


    

    render() {
        const { isLoading, users, error } = this.state;
        return (
            
               
            <React.Fragment>
        
             <Diagnosis getWeather={this.getWeather}/>
             {/*// Display a message if we encounter an error*/}
             {error ? <p>{error.message}</p> : null}
             {/*// Here's our data check*/}
             {!isLoading ? (
                 users.map(user => {
                    //const { username, name, email } = user;
                     const { Issue   } = user;
                     return (
                         <div key={Issue.ID}>

                             {/*for App page*/}
                             {/*<p>id: {Issue.ID}</p>*/}
                             {/*<p>Name: {Issue.Name}</p>*/}
                             {/*<p>Accuracy: {Issue.Accuracy} </p>*/}
                             {/*<p>Cause: {Issue.IcdName}</p>*/}
                             {/*<p>Ranking: {Issue.Ranking} </p>*/}

                             {/*for weather page*/}

                             <Result
                                 Name = {Issue.Name}
                                 id={Issue.ID}
                                 Accuracy= {Issue.Accuracy}
                                 Cause= {Issue.IcdName}
                                 Ranking= {Issue.Ranking}

                                 // error = {this.state.error}
                             />
                             <hr />
                         </div>
                     );
                 })
                 // If there is a delay in data, let's let the user know it's loading
             ) : (
                 <h3>Loading...</h3>
             )}
         </React.Fragment>
                
        );
    }
}

export default Symptoms;