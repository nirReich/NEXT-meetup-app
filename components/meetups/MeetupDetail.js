import React from "react";
import classes from "./MeetupDetail.module.css"

function MeetupDetail({ image, title, address, description }) {
  return (
    <section className={classes.body}>
      <img src={image} alt={title} height="400px" width="100%" />
      <h1>{title}</h1>
      <address>{address}</address>
      <h3>{description}</h3>
    </section>
  );
}

export default MeetupDetail;
