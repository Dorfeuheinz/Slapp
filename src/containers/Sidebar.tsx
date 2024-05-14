import React from "react";
import Self from "components/Sidebar";
import { ActionTypes, useGlobalContext } from "contexts/Global";


export default function Sidebar() {
	const { state, dispatch } = useGlobalContext();

	const handleOption = (option: string) => {
        dispatch({ type: ActionTypes.SIDEBAR_OPTION, payload: option });
    }
  
	return (
		<Self option={state.SidebarOption} handleOption={handleOption} />
	);
}

