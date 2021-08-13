import "./index.css";
require('dotenv').config();

function main() {
  return (
    <div style={{ background: "#f6f8fa" }}>
      <div className="main no-drag">
        <div className="wrapper">
          <div className={"intro"}>
            <div className={"subtitle1"}>
              <div>나만의 포트폴리오를</div>
              <div>손쉽게 만들어보세요</div>
            </div>

            <div className={"subtitle2"}>
              <div>개발자를 위한, 개발자에 의한</div>
              <div>포트폴리오 제작 서비스</div>
            </div>

            <div className={"title"}>GITPPO</div>
          </div>

          <a type="button"
            id="button"
            href={`https://github.com/login/oauth/authorize?client_id=8034b9cee0aef2068649&redirect_uri=https://gitppo-front.herokuapp.com/callback`}>
            Git으로 로그인하기
          </a>
        </div>

        <div className={"background"}>
          <img src={process.env.PUBLIC_URL + "/main.svg"}  alt={"소개 이미지"}/>
        </div>
      </div>
    </div>
  );
}

export default main;