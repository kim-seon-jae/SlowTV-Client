import React from "react";
import "./Contents.css";
import { fakeData } from "../Fakedata.js";

const Contents = ({ id, handleOnClick, history }) => {
  console.log("🚀 ~ file: Contents.js ~ line 9 ~ Contents ~ id>>>", id);

  const handleOnChange = (e) => {
    console.log("e.target.attributes>>>", e.target);
    // const test = e.target.attributes;
    // const test = e.target.attributes[0]; // class="4"
    // console.log(
    // "🚀 ~ file: Contents.js ~ line 13 ~ handleOnChange ~ test",
    // test
    // );
    // const test2 = document.querySelector(`.${test}`);

    let className = Number(e.target.attributes.value.value);
    // console.log(
    //   "🚀 ~ file: Contents.js ~ line 13 ~ handleOnChange ~ className",
    //   className
    // );

    // console.log("where1?>>>", document.querySelector(".test1"));

    // 5->1
    let prevtest5 = document.querySelector(".test5");
    prevtest5.className = "test1";

    // 4-> 5
    // document.querySelector(`.${className}`).className = "test5";
    let prevtest4 = document.querySelector(".test4");
    prevtest4.className = "test5";
    // console.log(
    //   "🚀 ~ file: Contents.js ~ line 26 ~ handleOnChange ~ prevtest4",
    //   prevtest4
    // );

    // 3->4
    let prevtest3 = document.querySelector(".test3");
    prevtest3.className = "test4";

    // 2->3
    let prevtest2 = document.querySelector(".test2");
    prevtest2.className = "test3";

    // 1->2
    let prevtest1 = document.querySelector(".test1");
    prevtest1.className = "test2";
  };

  return (
    <div className="category_page">
      <div className="video_list">
        {/* <div className="test_thumbnail1" onClick={handleOnClick}> */}
        <div className="test1">
          <img
            className="1"
            // className="test_thumbnail1_img"
            // src={fakeData[0].snippet.thumbnails.default.url}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAAAZlBMVEX///8AAADR0dFERESSkpJvb29ZWVk4ODhwcHBnZ2f7+/vOzs7s7OxjY2Pi4uL29vbZ2dmsrKzIyMgMDAzCwsImJiaEhISbm5u7u7uGhoZ3d3fn5+c9PT21tbUyMjIsLCwaGhpPT09FHIS6AAABwUlEQVR4nO3dUU/TYACGUUSQMZCBDhFQwP//J83Yk+jFumliNsN3zlUv3zxpm7Y3PToCAAAAAAAAgH9hfrrJx6tD79q7xbuNLg69a+8uN4c4PvSuvbsWYu1GiLVzIV4tvgnx6tPmDuOFmLgyhgtx/FmIV6cTHUYLsZzqMFiIxa0QK/MPkx3GCvFlusNQIe62dBgoxHzb+TBQiMst94eRQnw9295hkBCPDzsyjBHi6n5nhgFCLJYPU68X44SYPy5nE58fRgmxuLz+fvLwpxHeXojZ09nK0/Pty180eIMhdjwrCCGEEEIIsSJEhIgQESJCRIgIESEiRISIEBEiP4RYuznZ6u55lBC7vBdiTYgIESEiRISIEBEiQkSICBEhIkSEiBARIkJEiAgRISJEhIgQESJCRIgIESEiRISIEBEiQkSICBEhIkSEiBARIkJEiAgRISJEhIgQESJCRIgIESEiRISIEBEiQkSICBEhIkSEiBARIkJEiAgRISJEhIgQESJCRIgIESEiRISIEBEiQkSICBEhIkSEiBARIkJEiAgRISJEhIgQ2fIX9YtDb9ur+9NfZr8dzmbnV4feBgAAAADAf+InlhUZIaKTO2AAAAAASUVORK5CYII="
            // value={fakeData[0].id}
            value="1"
            alt="undefined thumbnail"
            onClick={handleOnChange}
          ></img>
        </div>
        <div className="test2">
          <img
            className="2"
            // className="test_thumbnail2_img"
            // src={fakeData[0].snippet.thumbnails.default.url}
            src="data:image/jpeg;base64,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"
            // value={fakeData[0].id}
            value="2"
            alt="undefined thumbnail"
            onClick={handleOnChange}
          ></img>
        </div>
        <div className="test3">
          <img
            className="3"
            // className="test_thumbnail2_img"
            // src={fakeData[0].snippet.thumbnails.default.url}
            src="data:image/jpeg;base64,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"
            // value={fakeData[0].id}
            value="3"
            alt="undefined thumbnail"
            onClick={handleOnChange}
          ></img>
        </div>
        <div className="test4">
          <img
            className="4"
            // className="test_thumbnail2_img"
            // src={fakeData[0].snippet.thumbnails.default.url}
            src="data:image/jpeg;base64,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"
            value={fakeData[0].id}
            // value="4"
            alt="undefined thumbnail"
            onClick={handleOnChange}
            // onClick={handleOnClick}
          ></img>
        </div>
        <div className="test5">
          <img
            // className="5"
            // className="test_thumbnail2_img"
            // src={fakeData[0].snippet.thumbnails.default.url}
            src="https://images.unsplash.com/photo-1476108621677-3c620901b5e7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            // value={fakeData[0].id}
            // value="5"
            value={fakeData[0].id}
            alt="undefined thumbnail"
            onClick={handleOnClick}
          ></img>
        </div>
        {/* </div> */}
      </div>
      {/* <div className="shape"></div>
      <br />
      <div className="shape2"></div> */}
    </div>
  );
};

export default Contents;
