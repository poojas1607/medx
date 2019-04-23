import React from "react";
import './Appointment.css'



class Diagnosis extends React.Component{
    constructor(props)
    {
        super(props);
        this.initialState ={
            Name:'',
            Age:'',
            Country:'',
            Maternity:'',
            Gender:'',
            YOB:'',
            Symptom:'',

        };

        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        })

    }
    handleSubmit(event){
        event.preventDefault();
        
        this.props.onSubmit(this.state);
        this.setState(this.initialState);


    }


    render(){
       


        return(
           <div className="conatiner wrapper">
            <div className="container form-wrapper">
            <h4> Get an Online Diagnosis Here!!</h4>
            <form onSubmit={this.props.getWeather}>
                
                <div className="Name">
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name"  placeholder="Enter your Name" value={this.state.Name} onChange={this.handleChange} />
                </ div>
                

            
                <div className="Country" >
                <label htmlFor="Country">Country</label>
                <input type="text" name="Country"  placeholder="Enter your Country" value={this.state.Country} onChange={this.handleChange} />
                </ div>



                <div className="YOB">
                <label htmlFor="YOB">Year Of Birth</label>
                <input type="text" name="YOB"  placeholder="Enter Year of Birth" value={this.state.YOB} onChange={this.handleChange}  />
                </ div>

                <div className="Symptom">
                <label htmlFor="Symptom">Symptoms</label>
                <input type="text" name="Symptom"  placeholder="Enter Symptom" value={this.state.Symptom} onChange={this.handleChange}  />
                </ div>
                

                
               
                

                
                {/*<div className="pregnant"> 
                <label htmlFor="maternity">Maternity</label>
                <RadioGroup name="maternity"  value="">
                <Radio value="opt1" Not Pregnant>Not Pregnant</Radio>
                <Radio value="opt2">Pregnant</Radio>
                </RadioGroup>
        </div>

                <div className="maternity" onChange={this.handleChange}>
                <label htmlFor="maternity">Maternity</label>
                        <input type="radio" value="opt1" defaultChecked  name="maternity"/> Not Pregnant
                        <input type="radio" value="opt2" name="maternity"/> Pregnant

                </div>
                

                
                {/*<div className="gender"> 
                <label htmlFor="gender">Gender</label>
                <RadioGroup name="demo1"  value="">
                <Radio value="opt1" Male>Male</Radio>
                <Radio value="opt2">Female</Radio>
                </RadioGroup>
    </div>*/}

                {/*<div className="gender" onChange={this.handleChange}>
                <label htmlFor="gender">Gender</label>
                        <input type="radio" value="MALE" defaultChecked  name="gender"/> Male
                        <input type="radio" value="FEMALE" name="gender"/> Female
</div>*/}

                
                
                {/*<div className="Age">
                <label htmlFor="Age">Age</label>
                <Select name="Age" id="Age" placeholder="Enter your Age" 
                value={this.state.age}
                onChange={this.onChange} >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>

</ div> */}

                <div className="Gender">
                <label htmlFor="Gender">Gender</label>
                        <select class="form-control" name="Gender" value={this.state.Gender} onChange={this.handleChange}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male </option>
                            <option value="Female">Female </option>
                           

                        </select>
                    </div>

                     <div className="Maternity">
                <label htmlFor="Maternity">Maternity</label>
                        <select className="form-control" name="Maternity" value={this.state.Maternity} onChange={this.handleChange}>
                            <option value="">Select Maternity</option>
                            <option value="Pregnant">Pregnant </option>
                            <option value="Not Pregnant">Not Pregnant</option>
                           

                        </select>
                    </div>
               {/* <div className="Age">
                <label htmlFor="Age">Age</label>
                        <select name="Age" value={this.state.age} onChange={this.handleChange}>
                            <option value="">Select age..</option>
                            <option value="10"> 10 </option>
                            <option value="20"> 20 </option>
                            <option value="30"> 30 </option>
                            <option value="40"> 40 </option>

                        </select>
</div>*/}
            



                <div className="search">
                
                <button type="submit" >Search</button>
                
                
                </div>
                </form>
                </div>
                </div>
        );
    }
};


export default Diagnosis;
