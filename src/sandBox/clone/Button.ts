const Button = ({ text }) => {
    return (
      <button className={`${text == "CANCLE" ? "btn" : "btn-clr1"}`}>
        {text}
      </button>
    );
  };
  
  export default Button;
  