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
          <Typography className="fs-16 fw-700">My Account</Typography>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" sx={{ marginY: "15px" }} />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ backgroundColor: "#F8F8F8" }}
      >
        <Grid item>
          <Typography
            className="fs-16 fw-700 "
            style={{ paddingX: "30px", margin: "15px" }}
          >
            My Profile
          </Typography>
        </Grid>
        <Grid item justifyContent="flex-end">
          <FaRegEdit color="#99CA3B" />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item lg={2} xs={12}>
          <Avatar src={profile} sx={{ width: 150, height: 150 }} />
        </Grid>
        <Grid
          item
          lg={10}
          xs={12}
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item lg={12} className="">
            <Typography className="fs-22 fw-700 ">Divya Chatterjee</Typography>
          </Grid>
          <Grid item lg={12} className="py-3">
            <Typography className="fs-12 text-gray">Designation</Typography>
            <Typography className="fs-14">Assistant Manager</Typography>
          </Grid>

          <Grid item lg={12} className="py-3">
            <Typography className="fs-12 text-gray">Company Name</Typography>
            <Typography className="fs-14">XXY Company Name</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography className="fs-12 text-gray">About Me</Typography>
          <Typography className="fs-14">
            Microsoft enables digital transformation for the era of an
            intelligent cloud and an intelligent edge. Its mission is to empower
            every person and every organization on the planet to achieve more.
            Microsoft set up its India operations in 1990. Microsoft in India
            offers its global cloud services from local data centers to
            accelerate digital transformation across Indian start-ups,
            businesses, and government agencies.
          </Typography>
        </Grid>
      </Grid>

      <Grid container className="d-flex" spacing={2}>
        <Grid item xs={11.5} lg={5.5} container>
          <Grid
            item
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ backgroundColor: "#F8F8F8" }}
          >
            <Typography className="fs-16 fw-700 ">
              My Account Setting{" "}
            </Typography>
            <FaRegEdit color="#99CA3B" />
          </Grid>
          <Grid item container className="d-flex">
            <Grid item lg={6} xs={12} className="py-3">
              <Typography className="fs-12 text-gray">Designation</Typography>
              <Typography className="fs-14">Assistant Manager</Typography>
            </Grid>

            <Grid item lg={6} xs={12} className="py-3">
              <Typography className="fs-12 text-gray">Company Name</Typography>
              <Typography className="fs-14">XXY Company Name</Typography>
            </Grid>
            <Grid item lg={6} xs={12} className="py-3">
              <Typography className="fs-12 text-gray">
                Phone/Landline
              </Typography>
              <Typography className="fs-14">7012248653</Typography>
            </Grid>

            <Grid item lg={6} xs={12} className="py-3">
              <Typography className="fs-14 " sx={{ color: "#2680EB" }}>
                Change Password
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={11.5} lg={5.5} container>
          <Grid
            item
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ backgroundColor: "#F8F8F8" }}
          >
            <Typography className="fs-16 fw-700 ">
              Application Setting{" "}
            </Typography>
            <FaRegEdit color="#99CA3B" />
          </Grid>
          <Grid item container className="d-flex">
            <Grid item xs={12} className="py-3">
              <Typography className="fs-14 text-gray">
                Receive Job Application via
              </Typography>
            </Grid>

            <Grid item xs={12} className="py-3">
              <RadioGroup
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
