import React from "react";
import Self from "components/Sidebar";
import { GlobalActionTypes, useGlobalContext } from "contexts/Global";


export default function Sidebar() {
	const { globalState, globalDispatch } = useGlobalContext();

	const handleOption = (option: string) => {
        globalDispatch({ type: GlobalActionTypes.SIDEBAR_OPTION, payload: option });
    }
  
	return (
		<Self option={globalState.SidebarOption} handleOption={handleOption} />
	);
}

