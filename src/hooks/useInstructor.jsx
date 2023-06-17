import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseInstructor=()=>{

    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("access-token");
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery(['isInstructor', user?.email], async () => {
        const res = await fetch(`https://server-site-theta.vercel.app/users/instructor/${user?.email}`, {
            headers: {
                authorization: `bearer ${token}`
            }
        })
        return res.json()
    })
    return [isInstructor, isInstructorLoading]


}
export default UseInstructor;