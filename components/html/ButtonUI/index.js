import classnames from "classnames/bind";

import Icon from "../Icon";

import styles from "./ButtonUI.module.scss";

const cx = classnames.bind(styles);

const ButtonUI = ({ clickHandler, disabled, icon, label }) => {
  const buttonUIClasses = cx({
    btnui: true,
    close: icon === "faXmark",
    disabled: disabled,
    label: label,
  });
  return (
    <button className={buttonUIClasses} onClick={clickHandler}>
      {label}
      <Icon icon={icon} />
    </button>
  );
};
export default ButtonUI;
