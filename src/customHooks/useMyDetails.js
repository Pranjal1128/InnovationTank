import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux"
import { isLoggedIn } from "../actions/userActions";

export const useMyDetails = () => {

    const [me, setMe] = useState();
    const dispatch = useDispatch();
    
    const myData = useSelector((state) => state.authReducer);
    
    useEffect(() => {
      dispatch(isLoggedIn());
    }, [me]);

    useEffect(() => {
        setMe(myData && myData.user)
    }, [myData])

  // console.log("me: ", me)
  console.log("custhook me", me)

    return [me,setMe];
}