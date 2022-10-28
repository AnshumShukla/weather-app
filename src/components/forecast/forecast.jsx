import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const Forecast = ({ data }) => {
  return (
    <div>
      <label className="title">30 Hour Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 10).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="time">{item.dt_txt}</label>
                  <label className="description">
                    {item.weather[0].main}
                  </label>
                  <label className="forecast-temp">
                    {Math.round(item.main.temp)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="forecast-details-grid">
              <div className="forecast-details-grid-item">
                  <label className="label-item">Description</label>
                  <label className="label-value">{item.weather[0].description}</label>
                </div>
                <div className="forecast-details-grid-item">
                  <label className="label-item">Pressure</label>
                  <label className="label-value">{item.main.pressure} hPa</label>
                </div>
                <div className="forecast-details-grid-item">
                  <label className="label-item">Humidity</label>
                  <label className="label-value">{item.main.humidity}%</label>
                </div>
                <div className="forecast-details-grid-item">
                  <label className="label-item">Feels Like</label>
                  <label className="label-value">{Math.round(item.main.feels_like)}°C</label>
                </div>
                <div className="forecast-details-grid-item">
                  <label className="label-item">Clouds</label>
                  <label className="label-value">{item.clouds.all}%</label>
                </div>
                <div className="forecast-details-grid-item">
                  <label className="label-item">Wind Speed</label>
                  <label className="label-value">{item.wind.speed} km/h</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
