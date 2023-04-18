import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios'

const style = {
  height: 100,
  border: "1px solid green",
  margin: 20,
  padding: 20
};

export const App = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);



  const fetchMoreData = () => {
    setPage((prev) => prev + 1)
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }
  };

  useEffect(() => {
    axios.get('http://localhost:9695/qb/getAllQuestions/' + page + '/' + 10).then(response => {

      setItems(prevState => [...prevState, ...response.data])

    }).catch((err) => {
      console.log(err);
    })
  }, [page])



  console.log(items);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Infinite-scroll-component</h1>
      <hr />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...{page + 1}</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {
          items.map((it, index) => {
            return <div style={style} key={index}>
              <code style={{ overflowWrap: 'break-word' }}>
                {JSON.stringify(it)}
              </code>
            </div>
          }
          )}
      </InfiniteScroll>
    </div>
  );
}