import "./index.css";

require('dotenv').config();
function main() {
    return (
        <div style={{background: "#f6f8fa"}}>
            <div className="main">
                <div className="wrapper">
                    <a type="button"
                       id="button"
                       href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`}>
                      Git으로 로그인하기
                    </a>
                </div>
            </div>
        </div>
        
    );
}

export default main;