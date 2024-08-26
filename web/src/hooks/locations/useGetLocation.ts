import { useState } from "react"
import { LocationType } from "../../types/locations/locations.type";
import axios from "axios";

const useGetLocation = () => {
  const [locationData, setLocationData] = useState<LocationType[]>([]);
  const getLocation = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/suggests/locations`);
    setLocationData(res.data);
  }

  return {
    locationData,
    getLocation
  }
}

export default useGetLocation