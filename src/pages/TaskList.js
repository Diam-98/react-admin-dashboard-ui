import React, { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import { List, Checkbox, Progress } from "antd";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Developpement App",
      done: false,
      progress: 30,
      assignedTo: "Daouda Fall",
    },
    {
      id: 2,
      name: "Creation Contenu",
      done: true,
      progress: 60,
      assignedTo: "Aminata Ba",
    },
    {
      id: 3,
      name: "Refactoring Code",
      done: false,
      progress: 10,
      assignedTo: "Ouseynou Diop",
    },
    {
      id: 4,
      name: "Mis a jour systeme",
      done: false,
      progress: 30,
      assignedTo: "Fatou Mbeng",
    },
    {
      id: 5,
      name: "Deploiement",
      done: true,
      progress: 60,
      assignedTo: "Mamadou Fall",
    },
    {
      id: 6,
      name: "Developpement Web",
      done: false,
      progress: 10,
      assignedTo: "Safiatou Diallo",
    },
  ]);

  const handleTaskToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <>
      <div className="dashboard-body">
        <DashboardHeader title="Partie Taches" breadcrumbs="Taches" />
        <div className="tasklist">
          <List
            dataSource={tasks}
            renderItem={(task) => (
              <List.Item>
                <Checkbox
                  checked={task.done}
                  onChange={() => handleTaskToggle(task.id)}
                >
                  {task.name}
                </Checkbox>
                <Progress percent={task.progress} status="active" />
                <span style={{ marginLeft: "10px" }}>
                  Assigné à: {task.assignedTo}
                </span>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default TaskList;
