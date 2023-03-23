import MeetupList from "@/components/meetups/MeetupList";

const dummy_data = [
  {
    id: "m1",
    image:
      "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2021/01/Tel-Aviv-Travel.jpg?fit=2000%2C1381&ssl=1",
    title: "Tel-Aviv meet 1",
    address: "some address, israel",
  },
  {
    id: "m2",
    image:
      "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2021/01/Tel-Aviv-Travel.jpg?fit=2000%2C1381&ssl=1",
    title: "Tel-Aviv meet 2",
    address: "some address, israel 2",
  },
];

function HomePage({ meetups }) {
  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
}

export async function getStaticProps() {
  // do something
  return {
    props: {
      meetups: dummy_data,
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: dummy_data,
//     },
//   };
// }

export default HomePage;
