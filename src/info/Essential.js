import input from "@material-ui/core/Input";
import {useState} from "react";

function Essential({data, setData}) {
  const onHandleImgChange = (e) => {
    const files = e.target.files;
    const theFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishedEvent) => {
      const {currentTarget : { result }} = finishedEvent;
      setData({...data, profile: result});
    }
  };
  const onHandleImgPopup = () => {
    const img = new Image();
    img.src = data.profile;

    const
      img_width = img.width,
      win_width = img.width + 25,
      img_height = img.height;

    const OpenWindow = window.open('', '_blank', 'width=' + img_width + ', height=' + img_height + ', menubars=no, scrollbars=auto');
    OpenWindow.document.write("<style>body{margin:0;}</style><img src='" + img.src + "' width='" + win_width + "' alt='프로필 이미지'>");
  };
  const onHandleInput = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  return (
    <div className={"essential-container"}>
      <div className={"title"}><h4>필수 정보</h4></div>

      {/* 사진 */}
      <div>
        <label>사진</label>
        <input type={"file"}
               accept={"image/*"}
               className={"pointer"}
               required={true}
               onChange={onHandleImgChange}/>
        {/*사진 미리보기*/}
        {data.profile && (
          <span className={"info-profile"}>
            <img src={data.profile}
                 alt="프로필 이미지"
                 height={"100px"}
                 style={{cursor: "pointer"}}
                 onClick={onHandleImgPopup}/>
            </span>
        )}
      </div>

      {/* 이름 */}
      <div>
        <label>이름</label>
        <input name={"name"}
               value={data.name}
               required={true}
               onChange={onHandleInput}/>
      </div>

      {/* 생년월일 */}
      <div>
        <label>생년월일</label>
        <input type="date"
               name={"birth"}
               value={data.birth}
               required={true}
               onChange={onHandleInput}/>
      </div>
    </div>
  );
}

export default Essential;