// import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

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
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   // fetch data from server
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <>
      {/* <h1>Home Page. Hello, Next! </h1> */}      
        {/* <MeetupList meetups={loadedMeetups} />      */}
        <MeetupList meetups={props.meetups} />     
    </>
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

export async function getStaticProps(){
  // fetch data
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
}

export default Home;
