import React, { useState } from "react";
import { Button, DatePicker, GetProps, Modal, Spin } from "antd";
import { BulkSchedulerProps } from "containers/BulkScheduler";
import { TreeSelect } from 'antd';
import dayjs from "dayjs";

const { SHOW_PARENT } = TreeSelect;
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;


const BulkScheduler: React.FC<BulkSchedulerProps> = ({ 
        open,
        onCancel,
        loading,
        handleSubmit,
 }) => {

        const [value, setValue] = useState<string[]>([]);

        const onChange = (newValue: string[]) => {
          console.log('onChange ', newValue);
          setValue(newValue);
        };

        const { RangePicker } = DatePicker;

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

        const range = (start: number, end: number) => {
                const result = [];
                for (let i = start; i < end; i++) {
                        result.push(i);
                }
                return result;
        };



        const treeData = [
        {
                title: 'Gateway 1',
                value: 'G1',
                key: 'G1',
                children: [
                        {
                        title: 'SLC 1',
                        value: 'C1',
                        key: 'C1',
                        },
                ],
        },
        {
                title: 'Gateway 2',
                value: 'G2',
                key: 'G2',
                children: [
                        {
                        title: 'SLC 2',
                        value: 'C2',
                        key: 'C2',
                        },
                        {
                        title: 'SLC 3',
                        value: 'C3',
                        key: 'C3',
                        },
                        {
                        title: 'SLC 4',
                        value: 'C4',
                        key: 'C4',
                        },
                ],
        },
        ];


      
        const tProps = {
                treeData,
                value,
                onChange,
                treeCheckable: true,
                showCheckedStrategy: SHOW_PARENT,
                placeholder: "Select SLC's",
                style: {
                width: '91%',
                height: '40px',
                },
        };


        return (
                <Modal
                        title={<p>SLC Scheduler</p>}
                        footer={
                        <Button type="primary" onClick={handleSubmit}>
                                Schedule
                        </Button>
                        }
                        open={open}
                        onCancel={onCancel}
                >
                        {loading ? <Spin /> : <>
                                <br />
                                <TreeSelect {...tProps} />
                                <br /><br />
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
                                        // style={{ borderColor: lightMode? "silver" : "gray" }}
                                        // onOk={handleScheduler(record.key)}
                                />
                                <br /><br />
                                <p>These SLC's will be scheduled in bulk</p>
                        </>}

                </Modal>
        );


}

export default BulkScheduler;