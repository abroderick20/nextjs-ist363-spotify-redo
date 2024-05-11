import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faArrowRight,
  faArrowDown,
  faAngleDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  faAngleLeft: faAngleLeft,
  faAngleRight: faAngleRight,
  faAngleDown: faAngleDown,
  faArrowRight: faArrowRight,
  faArrowDown: faArrowDown,
  faXmark: faXmark,
};

const Icon = ({ icon }) => {
  const matchingIcon = icons[icon];
  return <FontAwesomeIcon icon={matchingIcon} />;
};
export default Icon;
