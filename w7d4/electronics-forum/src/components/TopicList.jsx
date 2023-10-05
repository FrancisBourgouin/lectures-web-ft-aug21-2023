// State: No
// Props: topics[], viewTopic()
import TopicListItem from "./TopicListItem";

export default function TopicList(props) {
  const { topics, viewTopic } = props;

  const parsedTopics =
    Array.isArray(topics) &&
    topics.map((topic) => (
      <TopicListItem key={topic.id} {...topic} viewTopic={viewTopic} />
    ));

  return (
    <section className="TopicList">
      <h1>Browse all topics</h1>
      <ul>{parsedTopics}</ul>
    </section>
  );
}
