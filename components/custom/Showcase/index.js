import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import classnames from "classnames";

import ShowcaseContent from "./Content";
import ShowcaseExpandedContent from "./ExpandedContent";
import ShowcaseImages from "./Images";

import styles from "./Showcase.module.scss";

const Showcase = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [albums, setAlbums] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (items.length > 0) {
      try {
        fetch(`/api/albums?id=${items[activeIndex].id}`)
          .then((res) => res.json())
          .then((data) => {
            setAlbums(data.items || []); // Initialize with an empty array if data.items is undefined
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [activeIndex, items]);

  const showcaseClasses = classnames({
    [styles.showcase]: true,
    [styles.expanded]: isExpanded,
  });

  return (
    <div className={showcaseClasses}>
      <AnimatePresence>
        <ShowcaseImages
          items={items}
          activeIndex={activeIndex}
          isExpanded={isExpanded}
        />
        {!isExpanded ? (
          <ShowcaseContent
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            latestRelease={albums.length > 0 ? albums[0] : null}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        ) : (
          <ShowcaseExpandedContent
            items={items}
            activeIndex={activeIndex}
            albums={albums}
            setIsExpanded={setIsExpanded}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Showcase;
