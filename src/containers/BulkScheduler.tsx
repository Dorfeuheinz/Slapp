import React from "react";
import Self from "components/BulkScheduler";
import { GlobalActionTypes, useGlobalContext } from "contexts/Global";
import { Button } from "antd";

export type BulkSchedulerProps = {
    open: boolean;
	onCancel: () => void;
	loading: boolean;
	handleSubmit: () => void;
}

export default function BulkScheduler() {
	const [loading, setLoading] = React.useState<boolean>(true);
	const { globalState, globalDispatch } = useGlobalContext();


	const showLoading = () => {
		globalDispatch({
            type: GlobalActionTypes.SET_MODAL_LIST,
            payload: ['bulkScheduler']
        });
		setLoading(true);

		// Simple loading mock. You should add cleanup logic in real world.
		setTimeout(() => {
		setLoading(false);
		}, 2000);
	};

	const onCancel = () => {
		globalDispatch({
            type: GlobalActionTypes.SET_MODAL_LIST,
            payload: []
        });
	}

	const handleSubmit = () => {
		setLoading(true);

		// Simple loading mock. You should add cleanup logic in real world.
		setTimeout(() => {
		setLoading(false);
		}, 2000);
	};
  
	return (
		<>
			<button className="btn btn-active btn-error" onClick={showLoading}>Schedule</button>
			
			<Self
				open={globalState.ModalList.find(modal => modal === 'bulkScheduler') !== undefined}
				onCancel={onCancel}
				loading={loading}
				handleSubmit={handleSubmit}
			/>
		</>
	);
}
