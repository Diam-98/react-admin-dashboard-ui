import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import { AddOutlined } from "@mui/icons-material";

const CategoryComp = () => {
  const buttons = [
    {
      icon: <AddOutlined />,
      title: "Ajouter une categorie",
    },
  ];
  return (
    <>
      <div className='dashboard-body'>
        <DashboardHeader
          title='Dashboard Admin'
          breadcrumbs='Categories'
          buttons={buttons}
        />
      </div>
    </>
  );
};

export default CategoryComp;
