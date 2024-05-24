import React from "react";
import Self from "components/Dashboard";
import { useGlobalContext } from "contexts/Global";


export default function Dashboard() {
    const { globalState } = useGlobalContext();

    return(
        <Self lightMode={globalState.LightMode? "black": "#DCA54C"} />
    );
}
