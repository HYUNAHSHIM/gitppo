import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
require('dotenv').config();

function Callback({ history, location }) {

  useEffect(() => {
    async function getToken() {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
          code,
        });
        console.log(data);
        history.push({
          pathname: "/git",
          state: {data: data}
        }); 
      } catch (error) {
        console.error("Api request failed! Error!!");
      }
    }

    getToken();
  }, [location, history]);
  return (
    <div style={{padding: "150px", textAlign: "center"}}>
      <p>Repository 정보를 가져오는 중입니다...</p>
      <p>5분 정도 소요 될 수 있습니다. 잠시만 기다려주세요.</p>
    </div>
  );
}

export default Callback;