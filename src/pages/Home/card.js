import React, { useState } from "react";
import { OuterClick } from "react-outer-click";
import { Link } from "react-router-dom";

function MenuCard(props) {
  const [show, setShow] = useState(false);
  return (
    <OuterClick
      as="div"
      key={"menu"+props.id.toString()}
      className={"panel panel" + props.id + (show ? " open open-active" : "")}
      onClick={() => setShow(!show)}
      onOuterClick={(e) => {
        e.preventDefault();
        setShow(false);
      }}
    >
      <p>{props.first}</p>
      <p>{props.sec}</p>
      <Link to={props.url}>
        <p>{props.tr}</p>
      </Link>
    </OuterClick>
  );
}

export default MenuCard;
