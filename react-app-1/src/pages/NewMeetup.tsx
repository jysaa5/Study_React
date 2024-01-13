// 새 모임 약속을 추가
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData: { title: string; image: string; address: string; description: string }) {
    fetch("https://react-getting-started-c5dcd-default-rtdb.firebaseio.com/meetups.json", { method: "post", body: JSON.stringify(meetupData), headers: { "Content-Type": "application/json" } }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
