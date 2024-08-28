import { Grid } from "@mui/material";
import React from "react";

const Settings = () => {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="space-around">
      <Grid item container direction="row" alignItems="center" xs={3}>
       <Grid container direction="row" alignItems="center">
       <img src="images/setting/profile setting.png" alt="Profile" />
        <span
          className="text-lg font-semibold"
          style={{
            marginLeft: "10px",
          }}
        >
          Profile Setting
        </span></Grid> 
      </Grid>

      <Grid item container direction="row" alignItems="center" xs={3}>
        <img src="images/setting/add user.png" alt="Add User" />
        <span
          className="text-lg font-semibold"
          style={{
            marginLeft: "10px",
          }}
        >
          Add User +
        </span>
      </Grid>

      <Grid item container direction="row" alignItems="center" xs={3}>
        <img  src="images/setting/document.png" alt="Dashboard" />
        <span
          className="text-lg font-semibold"
          style={{
            marginLeft: "10px",
          }}
        >
          Dashboard Setting
        </span>
      </Grid>
    </Grid>
  );
};

export default Settings;
