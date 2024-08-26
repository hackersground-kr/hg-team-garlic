import { useState } from "react";
import axios from "axios";
import { LandType } from "../../types/lands/lands.type";

const useGetLands = () => {
  const [landData, setLandData] = useState<LandType[]>([]);
  const getLands = async (location:string) => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/suggests/lands`,{params:{location}}
    );
    console.log(res.data);
    setLandData(res.data);
  };

  return {
    landData,
    getLands,
  };
};

export default useGetLands;
