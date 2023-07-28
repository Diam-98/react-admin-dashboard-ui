import React, { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import {
  AddOutlined,
  DeleteOutlined,
  DetailsOutlined,
  EditOutlined,
} from "@mui/icons-material";
import { Button, Input, Select, Space, Table } from "antd";

const { Option } = Select;

const mockData = [
  {
    id: 1,
    image: "url_de_limage_1",
    titre: "Titre de l'article 1",
    resume: "Résumé de l'article 1",
    category: "Technologie",
  },
  {
    id: 2,
    image: "url_de_limage_2",
    titre: "Titre de l'article 2",
    resume: "Résumé de l'article 2",
    category: "Science",
  },
  // Ajoutez d'autres articles ici...
];

const PostComtp = () => {
  const [dataSource, setDataSource] = useState(mockData);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilterByCategory = (value) => {
    setSelectedCategory(value);
    const filteredData = mockData.filter((item) => item.category === value);
    setDataSource(filteredData);
  };

  const handleResetFilters = () => {
    setSelectedCategory(null);
    setSearchText("");
    setDataSource(mockData);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (url) => (
        <img src={url} alt='Article' style={{ maxWidth: 100 }} />
      ),
    },
    {
      title: "Titre",
      dataIndex: "titre",
      key: "titre",
    },
    {
      title: "Résumé",
      dataIndex: "resume",
      key: "resume",
    },
    {
      title: "Catégorie",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size='middle'>
          <Button type='primary' icon={<EditOutlined />}></Button>
          <Button icon={<DetailsOutlined />}></Button>
          <Button type='danger' icon={<DeleteOutlined />}></Button>
        </Space>
      ),
    },
  ];
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

        <div className='post-lis'>
          <div style={{ marginBottom: "16px" }}>
            <Input
              placeholder='Rechercher un article'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 200, marginRight: 8 }}
            />
            <Select
              placeholder='Filtrer par catégorie'
              value={selectedCategory}
              onChange={handleFilterByCategory}
              style={{ width: 150, marginRight: 8 }}
            >
              <Option value='Technologie'>Technologie</Option>
              <Option value='Science'>Science</Option>
              {/* Ajoutez d'autres options de catégorie ici... */}
            </Select>
            <Button onClick={handleResetFilters}>
              Réinitialiser les filtres
            </Button>
          </div>

          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 5 }} // Nombre d'articles par page
          />
        </div>
      </div>
    </>
  );
};

export default PostComtp;
