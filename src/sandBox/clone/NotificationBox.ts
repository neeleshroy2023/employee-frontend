import Button from "./Button";
import CheckBox from "./CheckBox";
import { data } from "./constant";
import { useState } from "react";

const NotificationBox = () => {
  const [click, sectClick] = useState(1);

  return (
    <div className="notification-box">
      <h1>Notification Settings</h1>
      {data.map((item) => (
        <CheckBox
          key={item.id}
          id={item.id}
          click={click}
          type={item.type}
          content={item.content}
          sectClick={sectClick}
        />
      ))}
      <hr />
      <div className="btn-container">
        <Button text="CANCLE" />
        <Button text="SAVE" />
      </div>
    </div>
  );
};

export default NotificationBox;
