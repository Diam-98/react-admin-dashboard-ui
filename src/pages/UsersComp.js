import { AddOutlined } from "@mui/icons-material";
import React from "react";
import DashboardHeader from "../components/DashboardHeader";

const UsersComp = () => {
  const buttons = [
    {
      icon: <AddOutlined />,
      title: "Ajouter un auteur",
    },
  ];
  return (
    <>
      <div className='dashboard-body'>
        <DashboardHeader
          title='Dashboard Admin'
          breadcrumbs='Auteurs'
          buttons={buttons}
        />
      </div>
    </>
  );
};

export default UsersComp;
