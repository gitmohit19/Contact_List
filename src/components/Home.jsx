import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import InfiniteScroll from "react-infinite-scroller";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';


function Home() {
  
  const data = new Array(1000).fill().map((value, index) => ({
    id: index,
    avatar: faker.image.avatar(),
    randomName: faker.name.fullName(),
    randomNum:Math.floor(100000000 + Math.random() * 9000000000)
  }));


  const showItems = (posts) => {
    var items = [];
    for (var i = 0; i < records; i++) {
      items.push(
        <div className="post " key={posts[i].id}>
          <img src={posts[i].avatar} alt="contact img"/>
          <h5>{`${posts[i].randomName}`}</h5>
          <h5>{`${posts[i].randomNum}`}</h5>
        </div>
      );
    }
    return items;
  };
  const itemsPerPage = 20;
  const [hasMore, setHasMore] = useState(true);
  const [records, setrecords] = useState(itemsPerPage);
  const loadMore = () => {
    if (records === data.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setrecords(records + itemsPerPage);
      }, 1000);
    }
  };
  return (
    <div className='container'>
            <InfiniteScroll
              pageStart={0}
              loadMore={loadMore}
              hasMore={hasMore}
              loader={<h3 className="loader">Loading...</h3>}
              useWindow={false}
            >
              <div className="data">
              {showItems(data)}
              </div>
            </InfiniteScroll>
        </div>
   
  );
}
export default Home;