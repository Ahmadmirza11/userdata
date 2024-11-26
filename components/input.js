import React, { useState } from 'react';

const PhoneInput = () => {
  const [countryCode, setCountryCode] = useState('+1'); 
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Country Code: ${countryCode}, Phone Number: ${phoneNumber}`)
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="rounded-lg w-400">
        <div className="flex items-center ">
          <select
            id="countryCode"
            value={countryCode}
            onChange={handleCountryChange}
            className="p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 p-33"
          >
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+91">+91 (India)</option>
            <option value="+81">+81 (Japan)</option>
            <option value="+61">+61 (Australia)</option>
            <option value="+34">+61 (bangaladash)</option>
            <option value="+61">+35 (america)</option>
            <option value="+61">+345 (canada)</option>
            <option value="+61">+35 (moroco)</option>
            <option value="+61">+3 (maldip)</option>
            <option value="+61">+234 (india)</option>
            {/* Add more options as needed */}
          </select>

          <input
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="p-2 border border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter phone number"
            style={{marginLeft:10}}
          />
        </div>
      </form>
    </div>
  );
};

export default PhoneInput;
