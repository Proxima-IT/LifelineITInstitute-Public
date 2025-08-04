import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const getAdminPanelData = () => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/general`,
        { withCredentials: true },
        
      );
     
      console.log(res)
      return res.data;
    },
    onError: (error) => {
      console.error("Admin Panel API Error:", error)
    },
  })
}
