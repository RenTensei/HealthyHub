import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const DashboardPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "")

  return (
    <section>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <button type="button">Last month</button>
      <ul>
        <li>
          <h2>Calories</h2>
          <p>Average value: <span>1700 kg</span></p>
        </li>
        <li>
          <h2>Water</h2>
          <p>Average value: <span>1700 ml</span></p>
        </li>
        <li>
          <h2>Weight</h2>
          <p>Average value: <span>68 kg</span></p>
        </li>
      </ul>
    </section>
  );
};

export default DashboardPage;
