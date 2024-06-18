import React from "react";
import Self from "components/Profile";
import { useAuth } from "contexts/Auth";


export default function Profile() {
    const auth = useAuth();
    
    return(
        <Self logout={auth.logout} />
    );
}
