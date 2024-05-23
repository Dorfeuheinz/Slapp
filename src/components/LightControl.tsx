import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { PercentageOutlined, SettingFilled } from "@ant-design/icons";
import { Input } from 'antd';
import { LightControlType } from "containers/LightControl";
import { SLCState } from "contexts/SLC";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

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
