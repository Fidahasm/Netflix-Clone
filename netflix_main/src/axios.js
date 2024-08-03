import { BaseUrl } from "./constant";
import axios from  "axios";
const instance = axios.create({baseURL:BaseUrl})
export default instance