import React, { PureComponent } from "react";
import DashboardHeader from "../components/DashboardHeader";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { LikeOutlined } from "@ant-design/icons";
import { Card, Statistic } from "antd";
import CountUp from "react-countup";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar } from "recharts";
import { data_1, data_2 } from "../data/menuItems";

const Home = () => {
  class CustomizedLabel extends PureComponent {
    render() {
      const { x, y, stroke, value } = this.props;

      return (
        <text
          x={x}
          y={y}
          dy={-4}
          fill={stroke}
          fontSize={10}
          textAnchor="middle"
        >
          {value}
        </text>
      );
    }
  }

  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, payload } = this.props;

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={16}
            textAnchor="end"
            fill="#666"
            transform="rotate(-35)"
          >
            {payload.value}
          </text>
        </g>
      );
    }
  }
  const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <div className="dashboard-body">
      <DashboardHeader title="Dashboard Admin" breadcrumbs="Accueil" />
      <div className="statistics">
        <div className="statistic-card">
          <Card bordered={false}>
            <Statistic title="Revenus" value={112893} formatter={formatter} />
          </Card>
        </div>
        <div className="statistic-card">
          <Card bordered={false}>
            <Statistic
              title="Feedback"
              value={1128}
              prefix={<LikeOutlined />}
            />
          </Card>
        </div>
        <div className="statistic-card">
          <Card bordered={false}>
            <Statistic title="Inscrits" value={93} suffix="/ 100" />
          </Card>
        </div>
        <div className="statistic-card">
          <Card bordered={false}>
            <Statistic
              title="Clients"
              value={11.28}
              precision={2}
              valueStyle={{
                color: "#3f8600",
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </div>
        <div className="statistic-card">
          <Card bordered={false}>
            <Statistic
              title="Ventes"
              value={9.3}
              precision={2}
              valueStyle={{
                color: "#cf1322",
              }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </div>
      </div>

      <div className="chartside">
        <div className="chart-left">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data_1}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                label={<CustomizedLabel />}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-right">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data_2}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
