import { useLocation, useNavigate, Link } from "react-router-dom";

const SuccessPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  if (!state) {
    return (
      <div className="NotFound">
        <p className="notSize">No data found. Please fill the form </p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const formData = state;

  return (
    <div className="success-container">
      <h1>Registration Successful</h1>
      <div className="submittedData">
        <h2>Submitted Details</h2>
        <p>
          <strong>First Name:</strong> {formData.FirstName}
        </p>
        <p>
          <strong>Last Name:</strong> {formData.LastName}
        </p>
        <p>
          <strong>Username:</strong> {formData.Username}
        </p>
        <p>
          <strong>Email:</strong> {formData.Email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.countryCode} {formData.PhoneNo}
        </p>
        <p>
          <strong>Country:</strong> {formData.country}
        </p>
        <p>
          <strong>City:</strong> {formData.city}
        </p>
        <p>
          <strong>PAN Number:</strong> {formData.panNo}
        </p>
        <p>
          <strong>Aadhar Number:</strong> {formData.AadharNo}
        </p>
      </div>
      <Link to="/" className="backLinkk">
        Back to Form
      </Link>
    </div>
  );
};

export default SuccessPage;
