import React  from 'react';

const Result = props => (
    <div className="weather__info">
        {
            props.Name  && <p className="weather__key"> Issue Name :
                <span className="weather__value">  { props.Name }</span>
             </p>
        }
        {
            props.Accuracy && <p className="weather__key"> Accuracy:
                <span className="weather__value"> { props.Accuracy }	</span>
            </p>
        }
        {
            props.Cause && <p className="weather__key"> Cause:
                <span className="weather__value"> { props.Cause } </span>
            </p>
        }
        {
            props.Ranking && <p className="weather__key"> Ranking:
                <span className="weather__value"> { props.Ranking } </span>
            </p>
        }
        {/*{*/}
            {/*props.error && <p className="weather__error">{ props.error }</p>*/}
        {/*}*/}
    </div>
);

export default Result;