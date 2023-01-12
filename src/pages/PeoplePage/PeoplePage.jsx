import React, { useEffect, useState } from "react";

import PeopleList from "../../components/PeoleList/PeoleList";
import { HTTPS, SWAPI_PEOPLE, SWAPI_ROOT } from "../../constants";
import { getPeopleId, getPeopleImage } from "../../services/getPeopledata";
import { getApiResource } from "../../utils/network";

import s from "./PeoplePage.module.css";

const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const getResource = async (url) => {
    const res = await getApiResource(url);
    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      const img = getPeopleImage(id);
      console.log(img);
      return {
        id,
        name,
        img,
      };
    });
    setPeople(peopleList);
  };
  useEffect(() => {
    getResource(HTTPS + SWAPI_ROOT + SWAPI_PEOPLE);
  }, []);
  return (
    <div className={s.poeplePage}>
      <h1>people</h1>
      <div>{people && <PeopleList people={people} />}</div>
    </div>
  );
};

export default PeoplePage;
