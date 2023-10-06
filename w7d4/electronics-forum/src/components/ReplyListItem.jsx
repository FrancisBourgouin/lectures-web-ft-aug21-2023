// State: NO
// Props: userId (NO), content, username, profile_url
/**
 * A React component representing a list item for displaying replies.
 *
 * @component
 * @param {Object} props - The properties for this component.
 * @param {string} props.content - The content of the reply.
 * @param {string} props.username - The username of the user who replied.
 * @param {string} props.profile_url - The URL of the user's profile picture.
 * @returns {JSX.Element} A list item displaying the user's profile picture, username, and reply content.
 */
export default function ReplyListItem(props) {
  const { content, username, profile_url } = props;
  return (
    <li className="ReplyListItem">
      <div>
        <div
          style={{
            width: 200,
            height: 200,
            backgroundImage: `url(${profile_url})`,
            backgroundSize: "cover",
            borderRadius: "50%",
          }}
        ></div>
        <h2>{username}</h2>
      </div>
      <p>{content}</p>
    </li>
  );
}
