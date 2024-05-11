import { motion } from "framer-motion";

import Heading from "../../html/Heading";
import Paragraph from "../../html/Paragraph";
import Image from "next/image";

import styles from "./Grid.module.scss";

const Grid = ({ items }) => {
  const listVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };
  const listItemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.ul
      variants={listVariants}
      initial="initial"
      animate="animate"
      className={styles.grid}
    >
      {items.map((item, index) => {
        return (
          <motion.li
            className={styles.grid__item}
            key={`album-${index}`}
            variants={listItemVariants}
            //initial="initial"
            //animate="animate"
          >
            <Image
              src={item.images[0].url}
              alt={item.name}
              width={item.images[0].width}
              height={item.images[0].height}
              className="responsive-img"
            />
            <Paragraph>{item.name}</Paragraph>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
export default Grid;
