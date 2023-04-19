/** @format */

import { Icon } from "@iconify/react";
import "./Button.css";

export const Button = {
  Category: ({ handleClick, title, icon }) => {
    return (
      <button className='category' onClick={handleClick}>
        <span className='icon'>
          <Icon icon={icon} width={30} />
        </span>
        <span className='tag'>{title}</span>
      </button>
    );
  },
  Tab: ({ handleClick, title }) => {
    return (
      <button className='tab' onClick={handleClick}>
        {title}
      </button>
    );
  },
  Icon: ({ action, handleClick }) => {
    return (
      <button className='action' onClick={handleClick}>
        <Icon
          icon={
            action === "edit"
              ? "material-symbols:edit-outline-rounded"
              : "material-symbols:delete-outline-rounded"
          }
          color={"red"}
        />
      </button>
    );
  },
};
