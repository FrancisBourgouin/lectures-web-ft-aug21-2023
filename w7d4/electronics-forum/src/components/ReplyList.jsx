// State: No
// Props: replies[], users
import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
  const { users, replies } = props;

  const parsedReplies =
    Array.isArray(replies) &&
    replies.map((reply) => (
      <ReplyListItem
        key={reply.content}
        content={reply.content}
        {...users[reply.userId]}
      />
    ));

  return <ul>{parsedReplies}</ul>;
}
