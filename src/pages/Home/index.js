import { useState } from "react";
import MenuCard from "./card";
import "./styles.css";
function Home() {
  const [content, setContent] = useState([
    { first: "for", sec: "Characters", tr: "go!", url: "/char" },
    { first: "for", sec: "Quates", tr: "go!", url: "/quotes" },
    { first: "for", sec: "Deaths", tr: "go!", url: "/deaths" },
    { first: "for", sec: "Chapters", tr: "go!", url: "/chapters" },
  ]);

  return (
    <div className="panels">
      {content.map((item, index) => (
        <MenuCard
          id={index + 1}
          first={item.first}
          sec={item.sec}
          tr={item.tr}
          url={item.url}
        />
      ))}
    </div>
  );
}

export default Home;
