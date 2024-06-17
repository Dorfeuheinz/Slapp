import React, { useEffect, useState } from "react";
import { Table,Input } from "antd";
import type { TableColumnsType } from "antd";
import { PercentageOutlined, SettingFilled } from "@ant-design/icons";
import { LightControlType } from "containers/LightControl";
import { SLCState } from "contexts/SLC";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';


dayjs.extend(relativeTime);

function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value} >
      {children}
    </Tooltip>
  );
}

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#0a84ff' : '#007bff',
  height: 5,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#e572EF',
    boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: '0px 0px 3px 1px #000',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
    '&:before': {
      boxShadow:
        '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&::before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
    height: 5,
    background: "#e572EF",
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    boxShadow: 'inset 0px 0px 4px -2px #000',
    backgroundColor: '#a572EF',
  },
}));

const LightControl: React.FC<LightControlType> = ({ slcState, lightMode, handleSwitch, handleBrightnessChange }) => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Example timestamp to convert to relative time
  const timestamp = dayjs('2024-05-23T12:10:00Z');
  const relativeTimestamp = timestamp.fromNow();

  const columns: TableColumnsType<SLCState> = [
    {
      title: "Name",
      width: 35,
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Timestamp",
      width: 30,
      dataIndex: "timestamp",
      key: "timestamp",
      render: (_, record: SLCState) => (
        record.timestamp !==null ?
        <p><b style={{ color: "green" }}>Active</b> <br /> {dayjs().format('DD/MM/YYYY HH:mm:ss')}</p>:
        <><b>Last active</b><br />{dayjs().subtract((record.timestamp!.unix() - dayjs().unix()), 'seconds').from(dayjs())}</>
      ),
    },
    {
      title: "Switch",
      dataIndex: "switch",
      key: "switch",
      width: 20,
      render: (_, record: SLCState) => (
        <input
          type="checkbox"
          className="toggle toggle-success toggle-lg"
          checked={record.switch}
          onChange={() => handleSwitch(record.key)}
        />
      ),
    },
    {
      title: "Brightness",
      dataIndex: "brightness",
      key: "brightness",
      width: 20,
      render: (_, record: SLCState) => (
        // <Input
        //   size="large"
        //   type="number"
        //   placeholder="default = 0"
        //   min="0"
        //   max="100"
        //   value={record.brightness}
        //   suffix={<PercentageOutlined />} 
        //   style={{ borderColor: lightMode? "silver" : "gray" }}
        //   onChange={(e) => handleBrightnessChange(record.key, parseInt(e.target.value, 10))} 
        // />
        <IOSSlider
          sx={{	display: "flex", alignItems: "center", justifyContent: "center" , right: "40px"}}
          aria-label="ios slider" 
          defaultValue={60} 
          valueLabelDisplay="on"
          
        />
      ),
    },
    {
      title: "Calibrate",
      dataIndex: "calibrate",
      key: "calibrate",
      width: 20,
      render: () => <a><SettingFilled spin={true} style={{ fontSize: 25, color: 'brown' }} /></a>,
    },
  ];

  return (
    <div className="lightcontrol-table">
    <Table
      data-theme={lightMode? "light": "luxury"}
      columns={columns}
      dataSource={slcState}
      summary={() => (
        <Table.Summary >
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={2} />
          </Table.Summary.Row>
        </Table.Summary>
      )}
      sticky={{ offsetHeader: 0 }}
    />
    </div>
  );
};

export default LightControl;
