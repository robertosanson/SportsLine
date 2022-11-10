import React from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ user, onChange, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="form-group">
          <label>First Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="first-name-input"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            placeholder="First name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="last-name-input"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            placeholder="Last name"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            placeholder="Email"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            placeholder="Password"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <br/>
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}> 
          Submit
          </button>
          <br/>
          <br/>
          <button> 
          <Link to="/auth">Go back</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
