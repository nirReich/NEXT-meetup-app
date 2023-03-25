import { MongoClient } from "mongodb";
import MeetupList from "@/components/meetups/MeetupList";

function HomePage({ meetups }) {
  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://nir:7281161@meetups.7fwfjef.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup)=>({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id:meetup._id.toString()
      })),
    },
    revalidate: 1,
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
