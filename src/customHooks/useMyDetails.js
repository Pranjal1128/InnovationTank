import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux"
import { isLoggedIn } from "../actions/userActions";

export const useMyDetails = (flag=1) => {

  const [me, setMe] = useState();
  const [render, setRender] = useState(false);
    const dispatch = useDispatch();
    
    const myData = useSelector((state) => state.authReducer);
    
    useEffect(() => {
      dispatch(isLoggedIn());
    }, [render]);

    useEffect(() => {
      setMe(myData && myData.user)
      
    }, [myData])

  // console.log("me: ", me)
  console.log("custhook useMyDetails", me)

    return [me,setRender];
}