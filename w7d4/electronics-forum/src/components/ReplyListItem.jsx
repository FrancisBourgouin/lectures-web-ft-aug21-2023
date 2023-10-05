// State: NO
// Props: userId (NO), content, username, profile_url

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
