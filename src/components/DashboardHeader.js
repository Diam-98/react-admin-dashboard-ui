import React from "react";
import { HomeOutlined } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";

const DashboardHeader = ({ title, breadcrumbs }) => {
  return (
    <div className="dashboard-header">
      <h1>{title}</h1>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <HomeOutlined />
          <Typography color="text.primary">{breadcrumbs}</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default DashboardHeader;
