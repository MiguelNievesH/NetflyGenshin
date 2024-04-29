import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = ({ allPosts, sortPosts, resetInput, search, onSearch }) => {
  return (
    <>
      <header>
        <Navbar
          onReset={resetInput}
          searchInput={search}
          handleSearch={onSearch}
        />
      </header>
      <section id="button-bar">
        <p>Sort By: </p>
        <button name="new-button" onClick={sortPosts}>
          Newest
        </button>
        <button name="popular-button" onClick={sortPosts}>
          Most Popular
        </button>
      </section>
      <section>
        {allPosts &&
          allPosts.map((post) => {
            // Safely check if created_time exists before slicing it
            const createTime = post["created_time"]
              ? post["created_time"].slice(0, 8)
              : "No Time";
            return (
              <Link to={`/id${post.id}`} className="link" key={post.id}>
                <div className="post-card">
                  <p>Posted {post["created_date"] + " " + createTime}</p>
                  <h3>{post.title}</h3>
                  <p>Upvotes: {post.upvotes}</p>
                </div>
              </Link>
            );
          })}
      </section>
    </>
  );
};

export default Home;
