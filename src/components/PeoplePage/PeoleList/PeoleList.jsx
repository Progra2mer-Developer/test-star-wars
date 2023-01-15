import React from "react";
import PeopleItem from "@components/PeoplePage/PeopleItem/PeopleItem";

import s from "./PeoleList.module.css";

const PeoleList = ({ people }) => {
  return (
    <div className={s.peopelList}>
      {people.map((peopleItem) => {
        return <PeopleItem {...peopleItem} key={peopleItem.id} />;
      })}
    </div>
  );
};

export default PeoleList;
