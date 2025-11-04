import React from "react";
import { TextField, Box } from '@mui/material';

const Form = () => {



  
  return (
    <div className="container mt-4" style={{ width: "100%" }}>
      <h2 className="mb-4">EDIT PROFILE</h2>
      <div className="d-flex justify-content-between gap-3">
        <Box component="form" style={{ width: "50%" }}>
          <div className="row mb-3">
            <div className="col-md-6">
              <TextField
                label="First Name"
                name="firstName"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#7b4b2a' } } }}
              />
            </div>
            <div className="col-md-6">
              <TextField
                label="Last Name"
                name="lastName"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#7b4b2a' } } }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <TextField
                label="Username"
                name="username"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#7b4b2a' } } }}
              />
            </div>
            <div className="col-md-6">
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#7b4b2a' } } }}
              />
            </div>
          </div>

          <TextField
            label="Bio"
            name="bio"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            placeholder="Tell us about yourself..."
            sx={{ mb: 2, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#7b4b2a' } } }}
          />

          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </Box>

        {/* <div className="relative">
          <img
            src="/coverpic.jpeg"
            alt="Profile"
            style={{ width: "350px", height: "200px" }}
          />
          <img
            className=""
            style={{ borderRadius: "50%" }}
            src={require("assets/img/faces/face-3.jpg")}
            alt="pic"
          />

          <div></div>
        </div> */}
      </div>

    </div>
  );
};

export default Form;