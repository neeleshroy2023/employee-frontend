const CheckBox = ({ id, type, content, click, sectClick }) => {
  const clickHandler = (id) => {
    sectClick(id);
  };
  return (
    <div className="check-box">
      <div
        className={`${id === click ? "round-border" : "round"}`}
        onClick={() => clickHandler(id)}
      ></div>
      <div className="content">
        <h3>{type}</h3>
        <p>{content}</p>
        <p></p>
      </div>
    </div>
  );
};

export default CheckBox;
