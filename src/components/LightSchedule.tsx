import { PercentageOutlined } from "@ant-design/icons";
import { Input, Table, TableColumnsType, DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import type { GetProps } from 'antd';
import { Dayjs } from "dayjs";
import { RangeValueType } from "rc-picker/lib/PickerInput/RangePicker";

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const { RangePicker } = DatePicker;

interface DataType {
  key: number;
  name: string;
  timestamp: string;
  scheduler: RangePickerProps['value'] | [];
  brightness: number;
}

const LightSchedule: React.FC = () => {
  const [data, setData] = useState<DataType[]>(() => {
    const initialData: DataType[] = [];
    for (let i = 0; i < 100; i++) {
      initialData.push({
        key: i,
        name: `S Light ${i}`,
        timestamp: new Date().toLocaleString(),
        scheduler: [],
        brightness: 0,
      });
    }
    return initialData;
  });

  const handleScheduler = (key: number) => (value: RangeValueType<Dayjs> | null | undefined) => {
    if(value !== null && value !== undefined && value[0] && value[1]){
      console.log('onOk: ', value![0]!.format('DD/MM/YYYY HH:MM Z'), value![1]!.format('DD/MM/YYYY HH:MM Z'));
    }
    else {
      alert("Operation not allowed, time range undefined!");
    }
  };

  const handleScheduleEvent = () => {
    console.log('onOk: ');
  };

  const handleBrightnessChange = (key: number, value: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, brightness: value } : item
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          timestamp: new Date().toLocaleString(),
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const columns: TableColumnsType<DataType> = [
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
      render: (_, record: DataType) => (
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="DD/MM/YYYY HH:mm"
          onChange={(value, dateString) => {
            console.log('Selected Time: ', value);
            console.log('Formatted Selected Time: ', dateString);
          }}
          onOk={handleScheduler(record.key)}
        />
      ),
    },
    {
      title: "Brightness",
      dataIndex: "brightness",
      key: "brightness",
      width: 20,
      render: (_, record: DataType) => (
        <Input
          size="large"
          type="number"
          placeholder="default = 0"
          min="0"
          max="100"
          value={record.brightness}
          suffix={<PercentageOutlined />} 
          onChange={(e) => handleBrightnessChange(record.key, parseInt(e.target.value, 10))} 
        />
      ),
    },
    {
      title: <button className="btn btn-active btn-error" onClick={handleScheduleEvent}>Schedule</button>,
      dataIndex: "scheduler_info",
      key: "scheduler_info",
      width: 30,
      render: (_, record: DataType) => record !== null && record !== undefined && record.scheduler!.length !== 0 ? <>
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
      data-theme={"light"}
      columns={columns}
      dataSource={data}
      summary={() => (
        <Table.Summary >
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={2} />
          </Table.Summary.Row>
        </Table.Summary>
      )}
      // antd site header height
      sticky={{ offsetHeader: 64 }}
    />
  );
};

  
  export default LightSchedule;