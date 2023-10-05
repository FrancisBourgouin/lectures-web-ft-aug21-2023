// State: No
// Props: id (the topic id), replies[], question, viewTopic()
export default function TopicListItem(props) {
  const { id, replies, question, viewTopic } = props;

  return (
    <li className="TopicListItem" onClick={() => viewTopic(id)}>
      <h1>{question.slice(0, 30)}...</h1>
      <h2>{replies.length} replies</h2>
    </li>
  );
}
