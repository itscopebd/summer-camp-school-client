import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseAdmin = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("access-token");
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery(['isAdmin', user?.email], async () => {
        const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
            headers: {
                authorization: `bearer ${token}`
            }
        })
        return res.json()
    })

    console.log(isAdmin)

    return [isAdmin, isAdminLoading]
}
export default UseAdmin;