import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserUpToDate, setUserIsUpToDate] = useState(false);

  useEffect(() => {
    if (!isUserUpToDate) {
      axios.get(`/api/user/${params.id}`).then(({ data }) => {
        setUser(data);
        setIsLoading(false);
      });
      setUserIsUpToDate(true);
    }
  }, [params.id, isUserUpToDate]);
  const fileInput = useRef();

  const onSubmitNewProfilePicture = () => {
    if (fileInput.current.files.length > 0) {
      const formData = new FormData();
      formData.append("image", fileInput.current.files[0]);
      axios
        .put(`/api/user/${params.id}/upload-profile-picture`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => {
          setUserIsUpToDate(false);
        });
    } else {
      alert("no file selected!");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
      {isLoading ? (
        "loading..."
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {user.profile_picture_url ? (
              <img
                width={200}
                height={200}
                src={user.profile_picture_url}
                alt={""}
                style={{ borderRadius: "50%" }}
              />
            ) : (
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  backgroundColor: "grey",
                }}
              />
            )}
          </div>
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            {user.username}
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                Upload Profile Picture:
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input type="file" ref={fileInput} />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={onSubmitNewProfilePicture}>
                  Submit New Profile Picture
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
