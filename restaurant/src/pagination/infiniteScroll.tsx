import { useEffect, useState } from "react";

interface userData {
  albumId: string;
  id: string;
  title: string;
  url: string;
}

const InfiniteScroll = () => {
  const [data, setData] = useState<userData[]>([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`,
      )
        .then((res) => res.json())
        .then((data) => setData(prev=> [...prev, ...data]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div style={{height:"800px"}}>
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
          {data &&
            data.map((item) => (
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

export default InfiniteScroll;
