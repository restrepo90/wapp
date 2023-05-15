import PropTypes from "prop-types";
import "./ButtonChange.css";

const ButtonChange = ({ onClick, isCelsius }) => {
  return (
    <button className="weather_button" onClick={onClick}>
      Change &deg;{isCelsius ? "F" : "C"}
    </button>
  );
};

ButtonChange.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCelsius: PropTypes.bool.isRequired,
};

export default ButtonChange;
