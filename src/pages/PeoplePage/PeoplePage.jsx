import React, { useEffect, useState } from "react";

import { WithErrorApi } from "@hoc-helpers/WithErrorApi";

import PeopleList from "@components/PeoplePage/PeoleList/PeoleList";
import { HTTPS, SWAPI_PEOPLE, SWAPI_ROOT } from "@constants/constants";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import { getApiResource } from "@utils/network";

import s from "./PeoplePage.module.css";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const [errorApi, setErrorApi] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });
      setErrorApi(false);
      setPeople(peopleList);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResource(HTTPS + SWAPI_ROOT + SWAPI_PEOPLE);
  }, []);

  return (
    <div className={s.poeplePage}>
      {errorApi ? (
        <ErrorMessage />
      ) : (
        <>
          <h1>people</h1>
          <div>{people && <PeopleList people={people} />}</div>
        </>
      )}
    </div>
  );
};

export default PeoplePage;
