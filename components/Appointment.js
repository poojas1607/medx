import React from 'react';
import './Appointment.css'


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };

class Appointment extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          firstName: null,
          lastName: null,
          email: null,
          password: null,
          formErrors: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          }
        };
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
          `);
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
      };
    
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "firstName":
            formErrors.firstName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "lastName":
            formErrors.lastName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
    
      render() {
        const { formErrors } = this.state;
    
        return (
          <div className="wrapper">
            <div className="form-wrapper">
              <h4><strong>Book Your Appointment</strong></h4>
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="firstName">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className={formErrors.firstName.length > 0 ? "error" : null}
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.firstName.length > 0 && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                  )}
                </div>
                <div className="lastName">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className={formErrors.lastName.length > 0 ? "error" : null}
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.lastName.length > 0 && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                  )}
                </div>
                <div className="email">
                  <label htmlFor="Registration_Number">Registration Number</label>
                  <input
                    className={formErrors.email.length > 0 ? "error" : null}
                    placeholder="Registration Number"
                    
                    name="email"
                    noValidate
                   
                  />
                 
                </div>
               <div className="firstName">
               <label htmlFor="Registration_Number">Date</label> 
               <input type="date" name="Date" />
                   </div>

                <div className="email">
                <label htmlFor="Doctor Name">Doctor Name</label>
                        <select className="form-control" name="firstName" value={this.state.Doctor} onChange={this.handleChange}>
                            <option value="">Select Doctor</option>
                            <option value="Dr. ABC">ABC</option>
                            <option value="Dr. XYZ">XYZ </option>
                           

                        </select>
                    </div>
                    <div className="email">
                <label htmlFor="firstName">Specialization</label>
                        <select className="form-control" name="firstName" value={this.state.Specialization} onChange={this.handleChange}>
                            <option value="">Select Specialization</option>
                            <option value="Neurosurgen">Neurosurgen</option>
                            <option value="Physician">Physician </option>
                           

                        </select>
                    </div>
                    

                  
                <div className="createAccount">
                  <button type="submit">BOOK APPOINTMENT</button>
                  
                </div>
              </form>
            </div>
            </div>
        );
    }
};

export default Appointment;