import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux"
import { isLoggedIn } from "../actions/userActions";

export const useUpdateBalance = () => {

    const [me, setMe] = useState();
    const dispatch = useDispatch();
    
    const myData = useSelector((state) => state.authReducer);
    
    useEffect(() => {
      dispatch(isLoggedIn());
    }, []);

    useEffect(() => {
        setMe(myData && myData.user)
    }, [myData])

    return me;
}