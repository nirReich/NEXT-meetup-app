import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import React from "react";

function NewMeetupPage() {
  const router = useRouter()
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
    router.push('/')
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
