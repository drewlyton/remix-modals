export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a href="/tweets">Tweets Page</a>
        </li>
        <li>
          <a href="?rmodal=new_tweet">New Tweet</a>
        </li>
        <li>
          <a href="?rmodal=edit_tweet">Edit Tweet</a>
        </li>
      </ul>
    </div>
  );
}
