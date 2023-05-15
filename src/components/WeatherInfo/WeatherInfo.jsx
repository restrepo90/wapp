import PropTypes from 'prop-types';
import './WeatherInfo.css';

const WeatherInfo = ({ weather, isCelsius }) => {
  return (
    <article className="weather_info">
      <h2>{weather.weather.main}</h2>
      <p className='weather_description'>{weather.weather.description}</p>
      <p className='weather_grades'>
        {isCelsius
          ? weather.temperature.celsius.toFixed(2)
          : weather.temperature.fahrenheit.toFixed(2)}
        °{isCelsius ? 'C' : 'F'}
      </p>
      <div className='weather_icon'>
        <img src={weather.weather.icon} alt={weather.weather.description} />
      </div>
      <p className='cities'>
        {weather.city}, {weather.country}
      </p>
    </article>
  );
};

WeatherInfo.propTypes = {
  weather: PropTypes.shape({
    weather: PropTypes.shape({
      main: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
    temperature: PropTypes.shape({
      celsius: PropTypes.number.isRequired,
      fahrenheit: PropTypes.number.isRequired,
    }).isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  isCelsius: PropTypes.bool.isRequired,
};

export default WeatherInfo;

