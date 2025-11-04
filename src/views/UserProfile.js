import React from 'react'

const UserProfile = () => {
  return (
    <div
      className="card"
      style={{ width: "350px", borderRadius: "8px 8px 0 0" }}
    >
      <div
        className="card1 border"
        style={{ backgroundColor: "#4f7ed6", color: "#fff" }}
      >
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex gap-1 align-items-center">
            <p className="mb-0">
              <i className="nc-icon nc-android" />
            </p>
            <h5 className="mb-0">Caller Information</h5>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <span className="btn btn-primary rounded-pill px-3 py-0">
              00:00
            </span>
            <span className="btn btn-primary rounded-pill text-black px-3 py-0">
              112
            </span>
            <span className="brown border rounded px-3 py-0">Idle</span>
          </div>
        </div>
      </div>

      <div className="pt-3 px-2">
        <label className="w-100">
          <span className="text-black">#</span>{" "}
          <input type="text" placeholder="Mobile Number" className="inputs" />
        </label>
      </div>
    </div>
  );
}

export default UserProfile
