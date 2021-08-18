import {useEffect, useState} from 'react';
import axios from 'axios';
import qs from 'qs';
import Loading from "../Loading";
import "./index.css";

require('dotenv').config();

function Callback({ history, location }) {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      const instance = axios.create({timeout: 5*60*1000});
      const { data } = await instance.post(
        `https://gitppo.herokuapp.com/auth`,
        //"http://localhost:8080/auth",
        {code}
      );

      history.push({
        pathname: "/git",
        state: {data: data}
      });
    }
    
    getToken()
      .then(() => setIsError(false))
      .catch((e) => {
        console.error("Api request failed! Error!!");
        console.error(e);
        setIsError(true);
        alert("Github 인증에 실패하였습니다.");
      });
  }, [location, history]);

  return (
    <div className={"error"}>
      {
        isError
        ? <div>
            <p>GitHub로 부터 정보를 가져오는데 실패하였습니다.</p>
            <p>다시 시도해주세요.</p>
          </div>
        : <div>
            <p>Repository 정보를 가져오는 중입니다.</p>
            <p>최대 5분 정도 소요 될 수 있습니다. 잠시만 기다려주세요.</p>
            <Loading />
          </div>
      }
    </div>
  );
}

export default Callback;