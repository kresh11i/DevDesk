import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Avatar from "../components/Avatar";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);

  const [profileFormData, setProfileFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
    role: user.role,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfileFormData({
      ...profileFormData,
      [name]: value,
    });
  };

  const handleSave = () => {
    updateUser(profileFormData);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setProfileFormData({
      name: user.name,
      email: user.email,
      bio: user.bio,
      role: user.role,
    });
    setIsEditing(false);
  };

  return (
    <div>
      <h1>Profile</h1>

      <Avatar name={user.name} />

      {isEditing ? (
        <div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={profileFormData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profileFormData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Bio</label>
            <textarea
              name="bio"
              value={profileFormData.bio}
              onChange={handleChange}
              rows={3}
            />
          </div>

          <div>
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={profileFormData.role}
              onChange={handleChange}
            />
          </div>

          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
          <p>Role: {user.role}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
