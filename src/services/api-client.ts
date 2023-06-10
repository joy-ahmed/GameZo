import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5d2d900ea3f44420939b8acddc13c8ab",
  },
});
