import Axios from "axios";

const baseURL = "https://server-nigga.herokuapp.com/api";
const scoreApi = Axios.create({ baseURL });

export default scoreApi;
