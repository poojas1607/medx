import React from 'react'
import './Doctor.css'
class Doctor extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          Specialization: null,
          Gender: null,
          Location:null,
          formErrors: {
            Specialization: "",
            Gender: "",
            Location: "",
            
          }
        };
      }
    render(){
        return(
            <div className="container">
            <div className="home">
            <div>
            <h1 style={{marginLeft:'20%',fontFamily: 'Coda Caption'}}>FIND A DOCTOR!</h1>
            
            </div>
            </div>
            <div className="main">
            <h3 style={{textAlign:'center',color:'white'}}>DISCOVER THE ONLINE APPOINTMENT</h3>
            </div>
            <div className="rowBottom">

            <div className="col-lg-4">
            <div class="box_feat">
						
						<h4><strong>FIND A DOCTOR</strong></h4>
						<p style={{fontFamily:'Abel',fontSize:'20px'}}>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
			</div>
            </div>

            <div className="col-lg-4">
            <div class="box_feat">
						
						<h4><strong>VIEW PROFILE</strong></h4>
						<p style  ={{fontFamily:'Abel',fontSize:'20px'}}>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
			</div>
            </div>

            <div className="col-lg-4">
            <div class="box_feat">
						
						<h4><strong>BOOK APPOINTMENT</strong></h4>
						<p style={{fontFamily:'Abel',fontSize:'20px'}}>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
			</div>
            </div>

            </div>
            <h3 style={{textAlign:'center',color:'white'}}>REFINE THE RESULTS</h3>
            <div className="form-wrapper">
            
            <label htmlFor="firstName">Specialization</label>
                        <select className="form-control" name="firstName" value={this.state.Specialization} onChange={this.handleChange}>
                            <option value="">Select Specialization</option>
                            <option value="Neurosurgen">Neurosurgen</option>
                            <option value="Physician">Physician </option>
                           

                        </select>
            <label htmlFor="firstName">Gender</label>
                        <select className="form-control" name="firstName" value={this.state.Gender} onChange={this.handleChange}>
                            <option value="">Select Gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                           

                        </select>
            <label htmlFor="firstName">Location</label>
                        <select className="form-control" name="firstName" value={this.state.Location} onChange={this.handleChange}>
                            <option value="">Select Location</option>
                            <option value="Teliyarganj">Teliyarganj</option>
                            <option value="Civil Lines">Civil Lines </option>
                           

                        </select>
            <p class="text-center"><a href="https://www.youtube.com" class="btn btn-outline-primary btn-lg">Find Doctor</a></p>
            
            </div>
           
            
                </div>
        );
    }
}

export default Doctor