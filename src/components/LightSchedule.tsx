import { PercentageOutlined } from "@ant-design/icons";
import { Input, Table, TableColumnsType, DatePicker } from "antd";
import React from "react";
import type { GetProps } from 'antd';

import { LightScheduleType } from "containers/LightSchedule";
import { SLCState } from "contexts/SLC";

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const { RangePicker } = DatePicker;

interface DataType {
  key: number;
  name: string;
  timestamp: string;
  scheduler: RangePickerProps['value'] | [];
  brightness: number;
}

const LightSchedule: React.FC<LightScheduleType> = ({ slcState, lightMode, handleScheduler, handleScheduleEvent, handleBrightnessChange }) => {


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setData((prevData) =>
  //       prevData.map((item) => ({
  //         ...item,
  //         timestamp: new Date().toLocaleString(),
  //       }))
  //     );
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

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
    },
    {
      title: "Schedule",
      dataIndex: "schedule",
      key: "schedule",
      width: 40,
      render: (_, record: SLCState) => (
        <RangePicker
          size="large"
          showTime={{ format: 'HH:mm' }}
          format="DD/MM/YYYY HH:mm"
          onChange={(value, dateString) => {
            console.log('Selected Time: ', value);
            console.log('Formatted Selected Time: ', dateString);
          }}
          style={{ borderColor: lightMode? "silver" : "gray" }}
          onOk={handleScheduler(record.key)}
        />
      ),
    },
    {
      title: "Brightness",
      dataIndex: "brightness",
      key: "brightness",
      width: 20,
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
      render: (_, record: SLCState) => record !== null && record !== undefined && record.scheduler ? <>
                <span style={{ color: 'GrayText' }}>From:</span> ${record.scheduler![0]!.format('DD/MM/YYYY HH:MM Z')}
                <br/>
                <span style={{ color: 'GrayText' }}>To:</span> ${record.scheduler![0]!.format('DD/MM/YYYY HH:MM Z')}
              </> : <>
                <span style={{ color: 'GrayText' }}>From:</span> 01/05/2024 00:05 +05:30
                <br/>
                <span style={{ color: 'GrayText' }}>To:</span> 01/05/2024 12:05 +05:30
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