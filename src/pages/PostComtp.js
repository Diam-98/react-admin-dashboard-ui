import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import { AddOutlined } from "@mui/icons-material";

const PostComtp = () => {
  const buttons = [
    {
      icon: <AddOutlined />,
      title: "Ajouter un article",
    },
  ];
  return (
    <>
      <div className='dashboard-body'>
        <DashboardHeader
          title='Dashboard Admin'
          breadcrumbs='Articles'
          buttons={buttons}
        />
      </div>
    </>
  );
};

export default PostComtp;
