// import { useEffect, useState } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

const DUMMY_MEETUPS = [
  { id: 'm1',
    title: 'A first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wien_-_Stephansdom_%281%29.JPG/500px-Wien_-_Stephansdom_%281%29.JPG',
    address: 'Some address 5, Some city 12345',
    description: 'This is first meetup',
  },
  { id: 'm2',
    title: 'A second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wien_-_Stephansdom_%281%29.JPG/500px-Wien_-_Stephansdom_%281%29.JPG',
    address: 'Some address 15, Some city 45678',
    description: 'This is second meetup',
  }
];

function Home(props) {  

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Brows a hudge list of React Meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;

//   // fetch data
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }    
//   };
// }

export async function getStaticProps() {
  // fetch data
  const client = await MongoClient.connect(
    "mongodb+srv://nextStudent:next220@mflix.ryh22.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray() ;

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString(),
      })),
      // meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default Home;
