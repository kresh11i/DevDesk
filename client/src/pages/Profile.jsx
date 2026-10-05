import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Avatar from "../components/Avatar";
import { NotificationContext } from "../context/NotificationContext";
import api from "../services/api";
import useLocalStorage from "../hooks/useLocalStorage";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const { showNotification } = useContext(NotificationContext);

  const [profileFormData, setProfileFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
    role: user.role,
  });

  const [isEditing, setIsEditing] = useState(false);

  // Actual selected File object
  const [avatar, setAvatar] = useState(null);

  // Temporary preview while editing
  const [previewImg, setPreviewImg] = useState("");

  // Persisted avatar URL
  const [savedAvatar, setSavedAvatar] = useLocalStorage("avatar", "");

  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfileFormData({
      ...profileFormData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    setIsUploading(true);

    try {
      updateUser(profileFormData);

      if (avatar) {
        const formData = new FormData();
        formData.append("image", avatar);

        const response = await api.post(
          "/tasks/profile/avatar",
          formData
        );

        const imgURL = `http://localhost:5000/uploads/${response.data.filename}`;

        // Save the actual uploaded image URL
        setSavedAvatar(imgURL);

        // Clear temporary preview
        setPreviewImg("");
      }

      setIsEditing(false);

      showNotification("Profile saved successfully", "success");
    } catch (error) {
      console.error(error);
      showNotification("Something went wrong, can't save", "error");
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancel = () => {
    setProfileFormData({
      name: user.name,
      email: user.email,
      bio: user.bio,
      role: user.role,
    });

    // Discard temporary image selection
    setAvatar(null);
    setPreviewImg("");

    // IMPORTANT:
    // savedAvatar is NOT changed here

    setIsEditing(false);
  };

  useEffect(() => {
    return () => {
      if (previewImg) {
        URL.revokeObjectURL(previewImg);
      }
    };
  }, [previewImg]);

  return (
    <div>
      <h1>Profile</h1>

      <Avatar
        name={user.name}
        img={previewImg || savedAvatar}
      />

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

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];

              if (!file) return;

              if (file.type.startsWith("image/")) {
                setAvatar(file);

                const previewURL = URL.createObjectURL(file);
                setPreviewImg(previewURL);

                showNotification(
                  "File accepted",
                  "success"
                );
              } else {
                showNotification(
                  "Invalid file type",
                  "error"
                );
              }
            }}
          />

          <button
            onClick={handleSave}
            disabled={isUploading}
          >
            {isUploading ? "Saving..." : "Save"}
          </button>

          <button
            onClick={handleCancel}
            disabled={isUploading}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
          <p>Role: {user.role}</p>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;