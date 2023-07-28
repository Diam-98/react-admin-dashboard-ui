import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import { AddOutlined } from "@mui/icons-material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { views_data } from "../data/chats";
import { Divider, Timeline } from "antd";

const Home = () => {
  const buttons = [
    {
      icon: <AddOutlined />,
      title: "Ajouter un post",
    },
  ];

  return (
    <>
      <div className='dashboard-body'>
        <DashboardHeader
          title='Dashboard Admin'
          breadcrumbs='Accueil'
          buttons={buttons}
        />
        <div className='home-content'>
          <div className='left'>
            <div className='top'>
              <p>Nombre de vues par articles</p>
              <Divider />
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <AreaChart
                    data={views_data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type='monotone'
                      dataKey='uv'
                      stroke='#8884d8'
                      fill='#8884d8'
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <Divider />
            <div className='bottom'>
              <p>Article recents</p>
              <Divider />
              <div className='admin-recent-posts'>
                <img
                  src='https://www.wanadev.fr/uploads/posts/225/225-cover.jpg'
                  alt='post-slug'
                />
                <div className='post-infos'>
                  <h4>
                    Créer facilement une API REST avec Symfony & API Platform
                  </h4>
                  <p>100 vues 16 commentaires</p>
                </div>
              </div>
              <div className='admin-recent-posts'>
                <img
                  src='https://laravel.sillo.org/wp-content/uploads/2020/09/Capture-decran-2020-09-24-191912.png'
                  alt='post-slug'
                />
                <div className='post-infos'>
                  <h4>Créer facilement une API REST avec Laravel & API</h4>
                  <p>100 vues 16 commentaires</p>
                </div>
              </div>

              <div className='admin-recent-posts'>
                <img
                  src='https://waytolearnx.com/wp-content/uploads/2020/05/Comment-initialiser-un-ArrayList-en-Java-800x445.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1'
                  alt='post-slug'
                />
                <div className='post-infos'>
                  <h4>Les listes en java ArrayList</h4>
                  <p>100 vues 16 commentaires</p>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='top'>
              <p>Mise jours recentes</p>
              <Divider />
              <Timeline
                mode='left'
                items={[
                  {
                    label: "10 Nov",
                    children: (
                      <div className='post-update'>
                        <p>Creer un tabs avec React JS</p>
                      </div>
                    ),
                  },
                  {
                    label: "19 Aout",
                    children: (
                      <div className='post-update'>
                        <p>Les listes en python</p>
                      </div>
                    ),
                  },
                  {
                    label: "03 Sept",
                    children: (
                      <div className='post-update'>
                        <p>Authentification JWT avec laravel</p>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
            <Divider />
            <div className='middle'>
              <p>Statistiques</p>
              <Divider />
              <div className='statistics'>
                <div className='item'>
                  <h3>128</h3>
                  <p>Articles</p>
                </div>
                <div className='item'>
                  <h3>392</h3>
                  <p>commentaires</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
