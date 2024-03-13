import {
  Avatar,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import profile from "../../src/assets/Image 292.png";
import { pink } from "@mui/material/colors";

export const MyAccount = () => {
  const [notification, setNotification] = useState("dashboard");
  return (
    <>
      <Grid
        container
        spacing={2}
        className="d-flex justify-content-center align-items-center"
      >
        <Grid item className="m-2">
          <IoArrowBack color="#99CA3B" />
        </Grid>
        <Grid item>
          <h5>My Account</h5>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography className="fw-700 " style={{ paddingLeft: "30px" }}>
            My Profile
          </Typography>
        </Grid>
        <Grid item justifyContent="flex-end">
          <FaRegEdit />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={2}>
            <Avatar src={profile} sx={{ width: 150, height: 150 }} />
          </Grid>
          <Grid
            item
            xs={10}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} className="">
              <Typography>Divya Chatterjee</Typography>
            </Grid>
            <Grid item xs={12} className="py-3">
              <Typography className="fs-16 text-gray">Designation</Typography>
              <Typography className="fs-18">Assistant Manager</Typography>
            </Grid>

            <Grid item xs={12} className="py-3">
              <Typography className="fs-16 text-gray">Company Name</Typography>
              <Typography className="fs-18">XXY Company Name</Typography>
            </Grid>
          </Grid>
          <Grid item sx={12}>
            <Typography className="fs-16 text-gray">About Me</Typography>
            <Typography className="fs-18">
              Microsoft enables digital transformation for the era of an
              intelligent cloud and an intelligent edge. Its mission is to
              empower every person and every organization on the planet to
              achieve more. Microsoft set up its India operations in 1990.
              Microsoft in India offers its global cloud services from local
              data centers to accelerate digital transformation across Indian
              start-ups, businesses, and government agencies.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="d-flex">
        <Grid item sm={12} lg={6} container>
          <Grid
            item
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ backgroundColor: "grey" }}
          >
            <Typography>My Account Setting </Typography>
            <FaRegEdit />
          </Grid>
          <Grid item container className="d-flex">
            <Grid item xs={6} className="py-3">
              <Typography className="fs-16 text-gray">Designation</Typography>
              <Typography className="fs-18">Assistant Manager</Typography>
            </Grid>

            <Grid item xs={6} className="py-3">
              <Typography className="fs-16 text-gray">Company Name</Typography>
              <Typography className="fs-18">XXY Company Name</Typography>
            </Grid>
            <Grid item xs={6} className="py-3">
              <Typography className="fs-16 text-gray">
                Phone/Landline
              </Typography>
              <Typography className="fs-18">7012248653</Typography>
            </Grid>

            <Grid item xs={6} className="py-3">
              <Typography className="fs-16 ">Change Password</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} lg={6} container>
          <Grid
            item
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ backgroundColor: "grey" }}
          >
            <Typography>Application Setting </Typography>
            <FaRegEdit />
          </Grid>
          <Grid item container className="d-flex">
            <Grid item xs={12} className="py-3">
              <Typography className="fs-16 text-gray">
                Receive Job Application via
              </Typography>
            </Grid>

            <Grid item xs={12} className="py-3">
              <RadioGroup
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
                value={notification}
                onChange={(e) => {
                  setNotification(e.target.value);
                }}
              >
                <FormControlLabel
                  value="dashboard"
                  control={<Radio />}
                  label=" Only onmy dashboard"
                />
                <FormControlLabel
                  value="email"
                  control={<Radio />}
                  label="Email and my dashboard"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} className="py-3">
              <Typography className="fs-16 text-gray">
                *Please note, this setting will not impact your old job postings
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
