import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import Dropzone, { useDropzone } from "react-dropzone";

const UserProfiles = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const fetchUserProfiles = () => {
    axios.get("http://localhost:8080/api/v1/user-profile").then(res => {
      console.log(res);
      setUserProfiles(res.data);
    });
  }

  useEffect(() => {
    fetchUserProfiles();
  }, []);  // if there is anything that changes in this list, useEffect will be triggered again

  return userProfiles.map((userProfile, index) => {
    return (
      /* TODO: profile image inventory */
      <div key={index}>
        {userProfile.userProfileId ? (
        <img 
          src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`}
        />) : null}
        <br />
        <br />
        <h1>{userProfile.userName}</h1>
        <p>UserID: {userProfile.userProfileId}</p>
        <AppDropzone {...userProfile} />
        <br />
      </div>
    )
  })
};

function AppDropzone({ userProfileId }) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    const file = acceptedFiles[0];
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);

    axios.post(
      `http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }

      }
    ).then(() => {
      console.log("file uploaded successfully")
    }).catch(err => {
      console.log(err);
    })

  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop profile image, or click to select profile image</p>
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <UserProfiles />
    </div>
  );
}

export default App;
