import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetupPage(){
    function addMeetupHendler(enteredMeetupData){
        console.log(enteredMeetupData);
    };

    return <NewMeetupForm onAddMeetup={addMeetupHendler} />;
}