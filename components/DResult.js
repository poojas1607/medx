import React from 'react';
import './DoctorResult.css'

class DResult extends React.Component{
    
    render(){
        
        return(
            
       

           <div>
                <div className="container">

                
    
                <center><h1 style={{fontFamil:'Convergence'}}>Find a Doctor</h1></center>
                <div className="row">
                <div class=" strip_list col-sm-6 col-md-4 col-lg-6 ">
                <small>PHYSICIAN</small>
                <h3><strong>Dr. Gopal Verma</strong></h3>
                <small>9876XXXX</small>
                <div>
                    Civil Lines ,Prayagraj 211004 .
                    <br/>
                    Consultant Fees: 500/-
                </div>
                <br/>
                
                <a href="/Appointment" class="btn btn-outline-primary btn-lg">Book Appointment</a>
                </div>
                <div class=" strip_list col-sm-6 col-md-4 col-lg-6">
                <small>PHYSICIAN</small>
                <h3><strong>Dr. Gopal Verma</strong></h3>
                <small>9876XXXX</small>
                
                <div>
                    Civil Lines ,Prayagraj 211004 .
                    <br/>
                    Consultant Fees: 500/-
                </div>
                <br/>
                <a href="https://www.youtube.com" class="btn btn-outline-primary btn-lg">Book Appointment</a>
                </div>
                </div>
                
           
</div>

           </div>
          
        );
    }
}

export default DResult;