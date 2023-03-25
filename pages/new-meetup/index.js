import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

function NewMeetupPage() {
  const addMeetupHandler = async (data) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await res.json()
    console.log(resData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
