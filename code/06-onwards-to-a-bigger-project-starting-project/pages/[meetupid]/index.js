import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.shiksha.com/mediadata/images/1535363251phpo8F5o9.png"
      title="First Meetup"
      address="SomeStreet 5, SomeCity"
      description="This is a first meetup $$$"
    />
  );
}

export async function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {params: {
        meetupId: 'm1',
      }},
      {params: {
        meetupId: 'm2',
      }},
    ]
  };
}

export async function getStaticProps(context){

  const meetupId = context.params.meetupId;

  return {
    props: {
      id: meetupId,
      image: "https://images.shiksha.com/mediadata/images/1535363251phpo8F5o9.png",
      title: "First Meetup",
      address: "SomeStreet 5, SomeCity",
      description: "This is a first meetup $$$",
    },
  };

}