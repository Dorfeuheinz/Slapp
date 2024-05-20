import React, { useEffect, useState } from "react";
import { Switch, Table } from "antd";
import type { TableColumnsType } from "antd";
import { PercentageOutlined, SettingFilled } from "@ant-design/icons";
import { Input } from 'antd';

interface DataType {
  key: number;
  name: string;
  timestamp: string;
  switch: boolean;
  brightness: number;
}


const LightControl: React.FC = () => {
  const [data, setData] = useState<DataType[]>(() => {
    const initialData: DataType[] = [];
    for (let i = 0; i < 100; i++) {
      initialData.push({
        key: i,
        name: `S Light ${i}`,
        timestamp: new Date().toLocaleString(),
        switch: true,
        brightness: 0,
      });
    }
    return initialData;
  });
  
  const handleSwitch = (key: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, switch: !item.switch } : item
      )
    );
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
      title: "Switch",
      dataIndex: "switch",
      key: "switch",
      width: 20,
      render: (_, record: DataType) => (
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
      title: "Calibrate",
      dataIndex: "calibrate",
      key: "calibrate",
      width: 20,
      render: () => <a><SettingFilled spin={true} style={{ fontSize: 25, color: 'brown' }} /></a>,
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

export default LightControl;
