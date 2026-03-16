import { useEffect, useState } from "react";

interface userData {
  albumId: string;
  id: string;
  title: string;
  url: string;
}

const Pagination = () => {
  const [page, setpage] = useState(1);
  const [user, setUser] = useState<userData[]>([]);
  const limit = 20;

  useEffect(() => {
    const fetchData = async () => {
    //   const offset = (page - 1) * limit;
      try {
        await fetch(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
        )
          .then((res) => res.json())
          .then((data) => setUser(data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [page]);

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
      <div>
        <button onClick={() => setpage(page - 1)} disabled={page ===1}> Prev </button>
        <button onClick={() => setpage(page + 1)}> Next </button>
      </div>
    </div>
  );
};

export default Pagination;
