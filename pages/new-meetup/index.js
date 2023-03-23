import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

function NewMeetup() {
  const addMeetupHandler = (data) => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
