import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ReplyForm from "./components/ReplyForm";
import ReplyList from "./components/ReplyList";
import ReplyListItem from "./components/ReplyListItem";
import Topic from "./components/Topic";
import TopicList from "./components/TopicList";
import TopicListItem from "./components/TopicListItem";
import { t1, t2, topicsObj } from "../data/topics";
import { usersObj } from "../data/users";

function App() {
  const [topics, setTopics] = useState(topicsObj);
  const [users, setUsers] = useState(usersObj);
  const [topic, setTopic] = useState(null);

  const viewAll = () => {
    setTopic(null);
  };

  const viewTopic = (topicId) => {
    if (topics[topicId]) {
      setTopic(topicId);
    }
  };

  const addReply = (message, topicId) => {
    const updatedTopic = { ...topics[topicId] };
    updatedTopic.replies = [...updatedTopic.replies, { userId: 11, content: message }];

    setTopics({ ...topics, [topicId]: updatedTopic });
  };

  return (
    <>
      <Header />
      <main>
        {topic === null && (
          <TopicList topics={Object.values(topicsObj)} viewTopic={viewTopic} />
        )}
        {topic !== null && (
          <Topic {...topics[topic]} users={users} addReply={addReply} viewAll={viewAll} />
        )}
      </main>
    </>
  );

  // return <Topic {...t1} users={usersObj} addReply={addReply} viewAll={viewAll} />;

  // return <ReplyList replies={t1.replies} users={usersObj} />;

  // const reply = t1.replies[4];
  // const user = usersObj[reply.userId];

  // return (
  //   <>
  //     <ReplyListItem content={reply.content} {...user} />
  //     <ReplyListItem content={reply.content} {...user} />
  //     <ReplyListItem content={reply.content} {...user} />
  //   </>
  // );
  // return <ReplyForm onSubmit={(formData) => console.log(formData)} />;
  // return <Header />;
  // return (
  //   <TopicList
  //     topics={Object.values(topicsObj)}
  //     viewTopic={(id) => console.log("switching to id", id)}
  //   />
  // );
  // return <TopicListItem {...t2} viewTopic={(id) => console.log("switching to id", id)} />;
}

export default App;
