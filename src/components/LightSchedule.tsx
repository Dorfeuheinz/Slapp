import { PercentageOutlined } from "@ant-design/icons";
import { Input, Table, TableColumnsType, DatePicker } from "antd";
import type { GetProps } from 'antd';
import React, { useEffect, useState } from "react";

import { LightScheduleType } from "containers/LightSchedule";
import { SLCState } from "contexts/SLC";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import BulkScheduler from "containers/BulkScheduler";

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

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

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const LightSchedule: React.FC<LightScheduleType> = ({ slcState, lightMode, handleScheduler, handleScheduleEvent, handleBrightnessChange }) => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const range = (start: number, end: number) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  // eslint-disable-next-line arrow-body-style
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };

  const disabledRangeTime: RangePickerProps['disabledTime'] = (_, type) => {
    if (type === 'start') {
      return {
        disabledHours: () => range(0, 60).splice(0, dayjs().hour()),
        disabledMinutes: () => range(0, 60).splice(0, dayjs().minute()+1),
      };
    }
    return {
      disabledHours: () => range(0, 60).splice(0, dayjs().hour()),
      disabledMinutes: () => range(0, 60).splice(0, dayjs().minute()+2),
    };
  };

  const columns: TableColumnsType<SLCState> = [
    {
      title: "Name",
      width: 30,
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Timestamp",
      width: 15,
      dataIndex: "timestamp",
      key: "timestamp",
      render: (_, record: SLCState) => (
        record.timestamp === null ?
        <p>{dayjs().format('DD/MM/YYYY HH:mm:ss')}</p>:
        <><b style={{ color: "purple" }}>Last active</b><br />{dayjs().subtract((record.timestamp!.unix() - dayjs().unix()), 'seconds').from(dayjs())}</>
      ),
    },
    {
      title: "Schedule",
      dataIndex: "schedule",
      key: "schedule",
      width: 60,
      render: (_, record: SLCState) => (
        <RangePicker
          size="large"
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
          onChange={(value, dateString) => {
            console.log('Selected Time: ', value);
            console.log('Formatted Selected Time: ', dateString);
          }}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [dayjs('00:00', 'HH:mm'), dayjs('11:59', 'HH:mm')],
          }}
          format="DD/MM/YYYY HH:mm"
          style={{ borderColor: lightMode? "silver" : "gray" }}
          onOk={handleScheduler(record.key)}
        />
      ),
    },
    {
      title: "Brightness",
      dataIndex: "brightness",
      key: "brightness",
      width: 25,
      render: (_, record: SLCState) => (
        <IOSSlider 
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" , right: "50px" }} 
          aria-label="ios slider" 
          defaultValue={60} 
          // value={record.brightness} 
          valueLabelDisplay="on" 
        />
      ),
    },
    {
      title: <BulkScheduler />,
      dataIndex: "scheduler_info",
      key: "scheduler_info",
      width: 27,
      // && record.scheduler!.length !== 0
      // format('DD/MM/YYYY HH:MM Z') to add timezone
      render: (_, record: SLCState) => record !== null && record !== undefined && record.scheduler ? <>
                <span style={{ color: 'GrayText' }}>From:</span>&nbsp; {record.scheduler![0]!.format('DD/MM/YYYY HH:MM')}
                <br/>
                <span style={{ color: 'GrayText' }}>&emsp;&nbsp;To:</span>&nbsp; {record.scheduler![0]!.format('DD/MM/YYYY HH:MM')}
              </> : <>
                <span style={{ color: 'GrayText' }}>From:</span>&nbsp; Everyday 18:00
                <br/>
                <span style={{ color: 'GrayText' }}>&emsp;&nbsp;To:</span>&nbsp; Everyday 06:00
              </>,
    },
  ];



  return (
    <div className="lightcontrol-table">
    <Table
      data-theme={lightMode? "light": "luxury"}
      columns={columns}
      dataSource={slcState}
      summary={() => (
        <Table.Summary>
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

  
export default LightSchedule;