import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        image="https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2021/01/Tel-Aviv-Travel.jpg?fit=2000%2C1381&ssl=1"
        title="fist meetup"
        address="some street,5 tlv israel"
        description="this is my first meetup"
      />
    </>
  );
}

export default MeetupDetails;
