import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://task-trek-server-two.vercel.app",
});

export default function usePublic() {
  return axiosPublic;
}
