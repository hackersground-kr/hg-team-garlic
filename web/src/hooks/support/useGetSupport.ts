import axios from "axios";
import { useState } from "react"
import { SupportType } from "../../types/support/support.type";

const useGetSupport = () => {
  const [supportData, setSupportData] = useState<SupportType[]>();
  const getSupport = async (filter:string) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/supports`,{params:{category:filter}});
    setSupportData(res.data);
  } 
  return {
    supportData,
    getSupport
  }
}

export default useGetSupport