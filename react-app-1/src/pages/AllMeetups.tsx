// 모든 모임 약속을 로드하고 표시하는 컴포넌트

import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { Data } from "../types";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedMeetups, setLoadedMeetups] = useState<Data[]>([]);

  useEffect(() => {
    fetch("https://react-getting-started-c5dcd-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [] as Data[];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups Page</h1>

      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
