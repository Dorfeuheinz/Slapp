import { PercentageOutlined } from "@ant-design/icons";
import { Input, Table, TableColumnsType, DatePicker } from "antd";
import type { GetProps } from 'antd';
import React, { useEffect, useState } from "react";
import { LightScheduleType } from "containers/LightSchedule";
import { SLCState } from "contexts/SLC";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

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
      width: 50,
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
      width: 18,
      render: (_, record: SLCState) => (
        <Input
          size="large"
          type="number"
          placeholder="default = 0"
          min="0"
          max="100"
          value={record.brightness}
          suffix={<PercentageOutlined />}
          style={{ borderColor: lightMode? "silver" : "gray" }}
          onChange={(e) => handleBrightnessChange(record.key, parseInt(e.target.value, 10))} 
        />
      ),
    },
    {
      title: <button className="btn btn-active btn-error" onClick={handleScheduleEvent}>Schedule</button>,
      dataIndex: "scheduler_info",
      key: "scheduler_info",
      width: 30,
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
  );
};

  
export default LightSchedule;