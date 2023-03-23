import MeetupList from "@/components/meetups/MeetupList";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const dummy_data = [
  {
    id: "m1",
    image:
      "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2021/01/Tel-Aviv-Travel.jpg?fit=2000%2C1381&ssl=1",
    title: "tel aviv meet 1",
    address: "some addres, israel",
  },
  {
    id: "m2",
    image:
      "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2021/01/Tel-Aviv-Travel.jpg?fit=2000%2C1381&ssl=1",
    title: "tel aviv meet 2",
    address: "some addres, israel 2",
  },
];


function HomePage() {
  const [meetupsList,setMeetupsList] = useState([])
  
  useEffect(()=>{
    setMeetupsList(dummy_data)
  },[])

  return (
    <div>
      <MeetupList meetups={meetupsList} />
    </div>
  );
}

export default HomePage;
