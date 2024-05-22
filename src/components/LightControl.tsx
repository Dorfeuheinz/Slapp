import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { PercentageOutlined, SettingFilled } from "@ant-design/icons";
import { Input } from 'antd';
import { LightControlType } from "containers/LightControl";
import { SLCState } from "contexts/SLC";


const LightControl: React.FC<LightControlType> = ({ slcState, lightMode, handleSwitch, handleBrightnessChange }) => {

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
      title: "Calibrate",
      dataIndex: "calibrate",
      key: "calibrate",
      width: 20,
      render: () => <a><SettingFilled spin={true} style={{ fontSize: 25, color: 'brown' }} /></a>,
    },
  ];

  return (
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
  );
};

export default LightControl;
