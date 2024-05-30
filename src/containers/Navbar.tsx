import React from "react";
import Self from "components/Navbar";
import { useAuth } from "contexts/Auth";


export default function Navbar() {
    const auth = useAuth();

    return(
        <Self logout={auth.logout} />
    );
}

