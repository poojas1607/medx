import React  from 'react';

const Result = props => (
    <div className="weather__info">
       
        {
            props.Name  && <p className="weather__key" style={{textAlign:'center',color:'white',fontFamily:'Abel',fontSize:'20px'}}> Issue Name :
                <span className="weather__value" >  { props.Name }</span>
             </p>
        }
        {
            props.Accuracy && <p className="weather__key" style={{textAlign:'center',color:'white',fontFamily:'Abel',fontSize:'20px'}}> Accuracy:
                <span className="weather__value"> { props.Accuracy }	</span>
            </p>
        }
        {
            props.Cause && <p className="weather__key" style={{textAlign:'center',color:'white',fontFamily:'Abel',fontSize:'20px'}}> Cause:
                <span className="weather__value"> { props.Cause } </span>
            </p>
        }
        {
            props.Ranking && <p className="weather__key" style={{textAlign:'center',color:'white',fontFamily:'Abel',fontSize:'20px'}}> Ranking:
                <span className="weather__value"> { props.Ranking } </span>
            </p>
        }
        {/*{*/}
            {/*props.error && <p className="weather__error">{ props.error }</p>*/}
        {/*}*/}
    </div>
);

export default Result;
