import React from "react";
import { Button, Modal, Spin } from "antd";
import { BulkSchedulerProps } from "containers/BulkScheduler";




const BulkScheduler: React.FC<BulkSchedulerProps> = ({ 
        open,
        onCancel,
        loading,
        handleSubmit,
 }) => {


        return (
                <Modal
                        title={<p>Loading Modal</p>}
                        footer={
                        <Button type="primary" onClick={handleSubmit}>
                                Schedule
                        </Button>
                        }
                        open={open}
                        onCancel={onCancel}
                >
                        {loading ? <Spin /> : <>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                        </>}

                </Modal>
        );


}

export default BulkScheduler;