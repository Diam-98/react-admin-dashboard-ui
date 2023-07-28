import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import { AddOutlined } from "@mui/icons-material";

const SubCategorieComp = () => {
  const buttons = [
    {
      icon: <AddOutlined />,
      title: "Ajouter une sous categorie",
    },
  ];
  return (
    <>
      <div className='dashboard-body'>
        <DashboardHeader
          title='Dashboard Admin'
          breadcrumbs='Sous categories'
          buttons={buttons}
        />
      </div>
    </>
  );
};

export default SubCategorieComp;
