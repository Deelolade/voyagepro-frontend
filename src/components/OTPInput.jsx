import React, { useRef, useState, useEffect } from "react";

const OtpInput = ({ length = 6, onOtpChange }) => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(length).fill(""));


  const handleChange = (idx, e) => {
    const value = e.target.value;
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[idx] = value.slice(-1); // Keep only last digit
    setOtp(newOtp);
    onOtpChange(newOtp.join(""));

    if (value.length > 0 && idx < length - 1) {
      inputRefs.current[idx + 1].focus();
    }
  };
  const handlePaste =(idx,e)=>{
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, length);

    if(/^[0-9]+$/.test(paste)){
      const newOtp = paste.split("").concat(new Array(length - paste.length).fill(""));
      setOtp(newOtp);
      onOtpChange(newOtp.join(""));

       newOtp.forEach((val, i) => {
      if(inputRefs.current[i]){
        inputRefs.current[i].value = val;
      }
      });

      // const lastFilled = Math.min(paste.lengthc, length)-1;
      // if( lastFilled >= 0 && inputRefs.current[lastFilled]){
      //   inputRefs.current[lastFilled].focus()
      // }
    }
  }
  // Handle backspace key
  const handleKeyDown = (idx, e) => {
    if (e.key === "Backspace") {
      if (otp[idx] === "" && idx > 0) {
        inputRefs.current[idx - 1].focus();
      }
    }
  };
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <>
      {otp.map((value, idx) => {
        return (
          <input
            type="text"
            value={value}
            key={idx}
            maxLength={1}
            ref={(input) => (inputRefs.current[idx] = input)}
            onChange={(e) => handleChange(idx, e)}
            onKeyDown={(e) => handleKeyDown(idx, e)}
            onPaste={(e) => handlePaste(idx, e)}
            className=" w-9 h-9 xxs:w-11 xxs:h-11 sm:w-14 sm:h-14 m-2 rounded-lg text-2xl font-semibold text-center outline-none"
          />
        );
      })}
    </>
  );
};

export default OtpInput;
