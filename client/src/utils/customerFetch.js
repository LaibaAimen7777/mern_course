import axios from "axios";

const customerFetch = axios.create({ baseURL: "/api/v1" });

export default customerFetch;
