import "./index.css";
require('dotenv').config();

function main() {
  return (
    <div style={{ background: "#f6f8fa" }}>
      <div className="main">
        <div className="wrapper">
          <a type="button"
            id="button"
            href={`https://github.com/login/oauth/authorize?client_id=8034b9cee0aef2068649&redirect_uri=http://localhost:3000/callback`}>
            Git으로 로그인하기
          </a>
        </div>
      </div>
    </div>
  );
}

export default main;