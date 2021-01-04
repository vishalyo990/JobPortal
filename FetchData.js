import axios from "axios";

export default fetch = () => {
  let res = axios.get(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
  );
  console.log(res);
};
