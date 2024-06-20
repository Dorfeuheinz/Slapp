import React, { useEffect, useState } from "react";
import { Card, Space } from "antd";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { useGlobalContext } from "contexts/Global";
import {Button,Flex} from 'antd';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import LeakRemoveIcon from '@mui/icons-material/LeakRemove';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

<Gauge
  value={75}
  startAngle={-110}
  endAngle={110}
  sx={{
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 40,
      transform: 'translate(0px, 0px)',
    },
  }}
  text={
     ({ value, valueMax }) => `${value} / ${valueMax}`
  }
/>
interface DashboardSvgProps {
  option: string;
}


const Dashboard: React.FC<{ lightMode: string }> = ({ lightMode }) => {
  const { globalState } = useGlobalContext();


  return (
    <>
          <div style={{ display: "flex", gap: "4%",alignItems:"center",justifyContent:"center",paddingTop:"0.6%",paddingBottom:"0.6%"}}>
        <Space direction="vertical" size={16}>
          <Card
            title="Online Gateways "
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
              <OpenWithIcon style={{fontSize:"43px"}}/>
              <Gauge cornerRadius="100%" sx={(theme) => ({
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 30,
    },
    [`& .${gaugeClasses.valueArc}`]: {
      fill: '#52b202',
    },
    [`& .${gaugeClasses.referenceArc}`]: {
      fill: theme.palette.text.disabled,
    },
  })} width={100} height={85} value={60} />
            </div>
          </Card>
        </Space>
        <Space direction="vertical" size={16}>
          <Card
            title="Lights ON"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
            <TipsAndUpdatesOutlinedIcon style={{fontSize:"43px"}}/>
            <Gauge cornerRadius="100%" sx={(theme) => ({
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 30,
    },
    [`& .${gaugeClasses.valueArc}`]: {
      fill: '#52b202',
    },
    [`& .${gaugeClasses.referenceArc}`]: {
      fill: theme.palette.text.disabled,
    },
  })} width={100}height={85}value={60} />
            </div>
          </Card>
        </Space>
        <Space direction="vertical" size={16}>
          <Card
            title="Active Load (W)"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%" }}>
            <ElectricBoltOutlinedIcon style={{fontSize:"43px"}}/>  
            <Gauge cornerRadius="100%" sx={(theme) => ({
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 30,
    },
    [`& .${gaugeClasses.valueArc}`]: {
      fill: '#52b202',
    },
    [`& .${gaugeClasses.referenceArc}`]: {
      fill: theme.palette.text.disabled,
    },
  })} width={100} height={85} value={60} />
            </div>
          </Card>
        </Space>
        <Space direction="vertical" size={16}>
          <Card
            title="Unresponsive Lights "
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div style={{ display: "flex", gap: "31%",alignItems:"center",justifyContent:"center" }}>
              <LeakRemoveIcon style={{fontSize:"43px",display:"flex",alignItems:"center",justifyContent:"center",top:"5%"}}/>
              <Gauge cornerRadius="100%" sx={(theme) => ({
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 30,
    },
    [`& .${gaugeClasses.valueArc}`]: {
      fill: '#52b202',
    },
    [`& .${gaugeClasses.referenceArc}`]: {
      fill: theme.palette.text.disabled,
    },
  })} width={100} height={85} value={60} />
            </div>
          </Card>
        </Space>
      </div>
    </>
  );
};

export default Dashboard;
