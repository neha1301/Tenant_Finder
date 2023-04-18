import React, { useState } from 'react';

function Otp() {
  const [otp, setOTP] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`OTP entered: ${otp}`);
  };
  const handleResendOTP = () => {
    console.log('Resending OTP...');
  };

  return (
  <div className="wrapper" >
    
        <div className="inner">
        
            <form onSubmit={handleSubmit}>
            <h3 >  VERIFICATION</h3>
                <div className="form-group">
                
                <br>
        
        </br>

                <label>
                 OTP:
             <input
            type="digits"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
        </label>
        <br>
        
        </br>

       
        </div>
        < div style={{ textAlign: 'left' }}>
        <div style={{ display: 'inline-block' }}>
            <button type="submit">Submit</button>
            
            </div> 
            </div>
            
           <br>
           </br>
        
            
        < div style={{ textAlign: 'left' }}>
        <div style={{ display: 'inline-block' }}>
        <button type="button" onClick={handleResendOTP}>
              Resend OTP?
            </button>   
            
            </div> 
            </div>
          
            </form>
           
            
        </div>
        </div>


  );
}

export default Otp;
