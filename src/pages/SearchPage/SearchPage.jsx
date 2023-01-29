import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

import ErrorMessage from "@components/ErrorMessage/ErrorMessage";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo/SearchPageInfo";
import UiInput from "@components/Ui/UiInput/UiInput";

import { getApiResource } from "@utils/network";

import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import { API_PEOPLE, API_SEARCH } from "@constants/constants";

import s from "./SearchPage.module.css";

const SearchPage = () => {
  const [errorApi, setErrorApi] = useState(null);
  const [people, setPeople] = useState([]);

  const [inputSearchValue, setInputSearchValue] = useState("");
  const getResponse = async (api, param) => {
    console.log(param);
    const res = await getApiResource(api + param);
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
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResponse(API_PEOPLE, 1);
  }, []);

  const debouncedGetResponce = useCallback(
    debounce((value) => getResponse(API_SEARCH, value), 500),
    []
  );
  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponce(value);
  };

  return (
    <div className={s.searchPage}>
      {errorApi ? (
        <ErrorMessage />
      ) : (
        <>
          <h1 className={"header__text"}>Search</h1>
          <UiInput
            inputSearchValue={inputSearchValue}
            handleInputChange={handleInputChange}
            placeholder="Input character's name"
            classes={s.input}
          />

          <SearchPageInfo people={people} />
        </>
      )}
    </div>
  );
};

export default SearchPage;
