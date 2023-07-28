import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { Button } from "antd";
import { HomeOutlined } from "@mui/icons-material";

const DashboardHeader = ({ title, breadcrumbs, buttons }) => {
  return (
    <div className='dashboard-header'>
      <div className='left'>
        <h1>{title}</h1>
        <div role='presentation'>
          <Breadcrumbs aria-label='breadcrumb'>
            <HomeOutlined />
            <Typography color='text.primary'>{breadcrumbs}</Typography>
          </Breadcrumbs>
        </div>
      </div>
      {buttons && (
        <div className='right'>
          {buttons.map((item, index) => (
            <Button key={index} className='button'>
              {item.icon}
              <span>{item.title}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
