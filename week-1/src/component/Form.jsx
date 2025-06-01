import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const countries = ["United States", "India"];
const citiesByCountry = {
  "United States": ["New York", "Los Angeles", "Chicago"],
  India: ["Mumbai", "Delhi", "Bangalore"],
};

const countryCodes = [
  { code: "+1", name: "USA" },
  { code: "+91", name: "India" },
  { code: "+44", name: "UK" },
];

const FormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Username: "",
    Email: "",
    password: "",
    hidepass: false,
    PhoneNo: "",
    countryCode: "+91",
    country: "",
    city: "",
    panNo: "",
    AadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [cities, setCities] = useState([]);
  const [submit, setsubmit] = useState(false);

  // initially set the track of the input placeholder
  const track = (fieldName) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
  };

  //   validating form
  useEffect(() => {
    const isValid = validateForm();
    setsubmit(isValid);
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   **
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setFormData((prev) => ({
      ...prev,
      country,
      city: "",
    }));
    setCities(citiesByCountry[country] || []);
    setTouched((prev) => ({ ...prev, country: true }));
  };

  const VisiblePass = () => {
    setFormData((prev) => ({
      ...prev,
      hidepass: !prev.hidepass,
    }));
  };

  const validateField = (name, value) => {
    // Only validate if the field has been touched
    if (!touched[name]) return "";

    let error = "";

    switch (name) {
      case "FirstName":
      case "LastName":
        if (!value.trim()) error = "This field is required";
        else if (!/^[a-zA-Z]+$/.test(value)) error = "Only letters allowed";
        break;
      case "Username":
        if (!value.trim()) error = "This field is required";
        else if (value.length < 4)
          error = "Username must be at least 4 characters";
        break;
      case "Email":
        if (!value.trim()) error = "This field is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Invalid email format";
        break;
      case "password":
        if (!value.trim()) error = "This field is required";
        else if (value.length < 6)
          error = "Password must be at least 6 characters";
        break;
      case "PhoneNo":
        if (!value.trim()) error = "This field is required";
        else if (!/^\d{10}$/.test(value))
          error = "Phone number must be 10 digits";
        break;
      case "country":
      case "city":
        if (!value.trim()) error = "This field is required";
        break;
      case "panNo":
        if (!value.trim()) error = "This field is required";
        else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value))
          error = "Invalid panNo number format";
        break;
      case "AadharNo":
        if (!value.trim()) error = "This field is required";
        else if (!/^\d{12}$/.test(value))
          error = "Aadhar number must be of 12 digits";
        break;
      default:
        break;
    }

    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (key !== "hidepass" && key !== "countryCode") {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldsTouched = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "hidepass" && key !== "countryCode") {
        allFieldsTouched[key] = true;
      }
    });
    setTouched(allFieldsTouched);

    if (validateForm()) {
      navigate("/success", { state: formData });
    }
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            onBlur={() => track("FirstName")}
            className={errors.FirstName ? "error" : ""}
          />
          {errors.FirstName && (
            <span className="error-message">{errors.FirstName}</span>
          )}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            onBlur={() => track("LastName")}
            className={errors.LastName ? "error" : ""}
          />
          {errors.LastName && (
            <span className="error-message">{errors.LastName}</span>
          )}
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="Username"
            value={formData.Username}
            onChange={handleChange}
            onBlur={() => track("Username")}
            className={errors.Username ? "error" : ""}
          />
          {errors.Username && (
            <span className="error-message">{errors.Username}</span>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            onBlur={() => track("Email")}
            className={errors.Email ? "error" : ""}
          />
          {errors.Email && (
            <span className="error-message">{errors.Email}</span>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="passInput">
            <input
              type={formData.hidepass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={() => track("password")}
              className={errors.password ? "error" : ""}
            />
            <button type="button" onClick={VisiblePass} className="pass">
              {formData.hidepass ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <div className="phoneInput">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="NumberCode"
            >
              {countryCodes.map((cc) => (
                <option key={cc.code} value={cc.code}>
                  {cc.code} ({cc.name})
                </option>
              ))}
            </select>
            <input
              type="text"
              name="PhoneNo"
              value={formData.PhoneNo}
              onChange={handleChange}
              onBlur={() => track("PhoneNo")}
              placeholder="Enter phone number"
              className={errors.PhoneNo ? "error" : ""}
            />
          </div>
          {errors.PhoneNo && (
            <span className="error-message">{errors.PhoneNo}</span>
          )}
        </div>

        <div className="form-group">
          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleCountryChange}
            onBlur={() => track("country")}
            className={errors.country ? "error" : ""}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && (
            <span className="error-message">{errors.country}</span>
          )}
        </div>

        <div className="form-group">
          <label>City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            onBlur={() => track("city")}
            disabled={!formData.country}
            className={errors.city ? "error" : ""}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>

        <div className="form-group">
          <label>PAN Number</label>
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
            onBlur={() => track("panNo")}
            className={errors.panNo ? "error" : ""}
          />
          {errors.panNo && (
            <span className="error-message">{errors.panNo}</span>
          )}
        </div>

        <div className="form-group">
          <label>Aadhar Number</label>
          <input
            type="text"
            name="AadharNo"
            value={formData.AadharNo}
            onChange={handleChange}
            onBlur={() => track("AadharNo")}
            className={errors.AadharNo ? "error" : ""}
          />
          {errors.AadharNo && (
            <span className="error-message">{errors.AadharNo}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={!submit}
          className={!submit ? "disabled" : ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
