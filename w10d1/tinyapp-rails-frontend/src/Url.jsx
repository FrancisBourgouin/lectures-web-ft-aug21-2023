export default function Url(props) {
  const { short_url, long_url, description } = props;
  return (
    <tr>
      <td>
        <a target="_blank" href={`/u/${short_url}`}>
          {short_url}
        </a>
      </td>

      <td>{long_url}</td>

      <td>{description}</td>

      <td>
        <a href="#">Please login to edit</a>
      </td>
    </tr>
  );
}
