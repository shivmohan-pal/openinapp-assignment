import "./Activities.css";
import { Fetch, url } from "../config/api";
import { BarChart } from "./Charts";
import { NoOfCatagory, DataBetweenDates } from "../helpers/functions";

const DataField = ({ background, title }) => {
  return (
    <span className="datafield">
      <span className="dot" style={{ background: background }}></span>
      <span className="title">{title}</span>
    </span>
  );
};

const Activities = () => {
  const data = Fetch(url);
  const chartData = {
    male: {
      week_1: NoOfCatagory(
        DataBetweenDates(data, "Feb 1,2020", "Feb 7,2020"),
        "gender",
        "Male"
      ),
      week_2: NoOfCatagory(
        DataBetweenDates(data, "Feb 8,2020", "Feb 14,2020"),
        "gender",
        "Male"
      ),
      week_3: NoOfCatagory(
        DataBetweenDates(data, "Feb 15,2020", "Feb 21,2020"),
        "gender",
        "Male"
      ),
      week_4: NoOfCatagory(
        DataBetweenDates(data, "Feb 22,2020", "Mar 1,2020"),
        "gender",
        "Male"
      ),
    },
    female: {
      week_1: NoOfCatagory(
        DataBetweenDates(data, "Feb 1,2020", "Feb 7,2020"),
        "gender",
        "Female"
      ),
      week_2: NoOfCatagory(
        DataBetweenDates(data, "Feb 8,2020", "Feb 14,2020"),
        "gender",
        "Female"
      ),
      week_3: NoOfCatagory(
        DataBetweenDates(data, "Feb 15,2020", "Feb 21,2020"),
        "gender",
        "Female"
      ),
      week_4: NoOfCatagory(
        DataBetweenDates(data, "Feb 22,2020", "Mar 1,2020"),
        "gender",
        "Female"
      ),
    },
  };
  return (
    <div className="activities">
      <h3>Activities</h3>
      <div className="period-datafield">
        <span className="period">Feb - Mar 2020</span>
        <div className="datafields">
          <DataField background="var(--Light-Red)" title="Male" />
          <DataField background="var(--Light-Green)" title="Female" />
        </div>
      </div>
      <div className="bar-chart">
        {!data ? "loading..." : <BarChart Data={chartData} />}
      </div>
    </div>
  );
};

export { Activities, DataField };
