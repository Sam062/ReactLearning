import { useEffect, useState } from "react";
import { getData } from "./DataArray";
import DataComponent from "./DataComponent";



function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const handleInfiniteScroll = () => {
    console.log('Scroll height : ' + document.documentElement.scrollHeight);
    console.log('inner height : ' + window.innerHeight);
    console.log('Scroll Top : ' + document.documentElement.scrollTop);

    try {
      if (window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }


  }
  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => window.removeEventListener('scrol', handleInfiniteScroll)
  }, [])
  useEffect(() => {

  }, [page])

  return (
    <div>
      Infinite Data Scroll
      <DataComponent data={data} page={page} />
    </div>
  );
}

export default App;
