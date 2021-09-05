import style from "./Button.module.css";
import propTypes from "prop-types";

function Button({ onClick, images }) {
  if (images.length > 0) {
    return (
      <button className={style.Button} type="button" onClick={onClick}>
        Load more
      </button>
    );
  }

  return null;
}

Button.propTypes = {
  onClick: propTypes.func,
  images: propTypes.arrayOf(propTypes.object),
};

export default Button;
