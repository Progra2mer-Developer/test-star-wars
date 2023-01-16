import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PEOPLE_PAGE_ROUTE } from "../../constants/constants";

import s from "./PeopleItemPage.module.css";

const PeopleItemPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.replace(`${PEOPLE_PAGE_ROUTE}/:`, "");
  console.log(navigate);
  return (
    <div className={s.peopleItemPage}>
      <button onClick={() => navigate(-1)}>Back</button>
      <div style={{ color: "white" }}>PeopleItemPage</div>
      <div style={{ color: "white" }}>ID:{id}</div>
    </div>
  );
};

export default PeopleItemPage;
