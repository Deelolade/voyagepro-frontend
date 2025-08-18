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

    // Send joined OTP to parent
    onOtpChange(newOtp.join(""));

    // Move focus to next input if current one is filled
    if (value.length > 0 && idx < length - 1) {
      inputRefs.current[idx + 1].focus();
    }
  };
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
            ref={(input) => (inputRefs.current[idx] = input)}
            onChange={(e) => handleChange(idx, e)}
            onKeyDown={(e) => handleKeyDown(idx, e)}
            className="w-14 h-14 m-2 rounded-lg text-2xl font-semibold text-center outline-none"
          />
        );
      })}
    </>
  );
};

export default OtpInput;
