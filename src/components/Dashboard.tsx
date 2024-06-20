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

    </>
  );
};

export default Dashboard;
