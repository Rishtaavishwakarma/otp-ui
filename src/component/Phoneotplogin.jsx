import React, { useState } from 'react';
import OtpInput from './OtpInput';

const Phoneotplogin = () => {
    const [phoneNumber,setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState("");
    
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    };
    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        //phone validation
        const regex = /[^0-9]/g;
        if(phoneNumber.length<10 || regex.test(phoneNumber)){
            alert("invalid Phone Number");
            return;
        }

        // call be api
        //show otp detail
        setShowOtpInput(true);
    };
    const onOtpSubmit=() =>{
        console.log("login successfull");
        
    }
        return (
        <div>
    {!showOtpInput? <form onSubmit={handlePhoneSubmit}>
    <input 
     type='text'
     value={phoneNumber}
onChange={handlePhoneNumber}
placeholder='enter your number'
     />
<button type='submit'>Submit</button>
    </form>:
    <div>
      <p>Enter OTP sent to {phoneNumber} </p>  
      <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
    </div>
}
        </div>

    );
}

export default Phoneotplogin;
