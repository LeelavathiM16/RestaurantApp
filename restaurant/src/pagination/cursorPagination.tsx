import { useEffect, useState } from "react";

interface userData {
  albumId: string;
  id: string;
  title: string;
  url: string;
}

const CursorPagination = () => {
  const [cursor, setcursor] = useState<string | null>(null);
  const [user, setUser] = useState<userData[]>([]);
  const limit = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(
          `https://jsonplaceholder.typicode.com/photos?_cursor=${cursor}&_limit=${limit}`,
        )
          .then((res) => res.json())
          .then((data) => {
            setUser(data);
            setcursor(data.albumId);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cursor]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>albumId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.map((item) => (
              <tr key={item.id}>
                <td>{item.albumId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CursorPagination;
