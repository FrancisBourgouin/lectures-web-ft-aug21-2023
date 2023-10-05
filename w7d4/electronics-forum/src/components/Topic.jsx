// State: No
// Props: replies[], question, userId, viewAll(), addReplyToTopic(), users

import ReplyList from "./ReplyList";
import ReplyForm from "./ReplyForm";

export default function Topic(props) {
  const { replies, question, userId, viewAll, addReply, users, id } = props;

  return (
    <section>
      <h1 onClick={viewAll}>Go back to all the topics</h1>
      <header style={{ backgroundColor: "#b0b" }}>
        <h1>{question}</h1>
        <div
          style={{
            width: 200,
            height: 200,
            backgroundImage: `url(${users[userId].profile_url})`,
            backgroundSize: "cover",
            borderRadius: "50%",
          }}
        ></div>
        <h2>{users[userId].username}</h2>
      </header>
      <ReplyList replies={replies} users={users} />
      <ReplyForm onSubmit={(formData) => addReply(formData.reply, id)} />
    </section>
  );
}
