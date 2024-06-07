import React, { useState, useContext } from "react";
import JoblyApi from "../Api";
import UserContext from "../UserContext";

function ProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, profileData);
    } catch (errors) {
      debugger;
      return;
    }

    setFormData((f) => ({ ...f, password: "" }));

    setCurrentUser(updatedUser);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));

  }

  return (
    <div className="profile-form">
      <h3>Profile</h3>

      <div>
        <form>
          <div>
            <label>Username</label>
            <p className="form-control-plaintext">{formData.username}</p>
          </div>
          <div>
            <label>First Name</label>
            <input
              name="firstName"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              name="lastName"
              className="form-control"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Confirm password to make changes:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            className="btn btn-primary btn-block mt-4"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
