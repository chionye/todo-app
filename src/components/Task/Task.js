/** @format */

import { Button } from "../Button/Button";
import "../Button/Button.css";
import "./Task.css";

export const Task = {
  Container: ({ children }) => {
    return <div id='tasks'>{children}</div>;
  },
  Item: ({ title, description, done, editTask, deleteTask, taskId }) => {
    return (
      <div className='task' id={taskId}>
        <div className='flex'>
          <input
            type='checkbox'
            checked={done === "false" ? false : true}></input>
          <div className='content'>
            <input
              className='title'
              type='text'
              value={title}
              onChange={editTask}
            />
            {description ? (
              <textarea rows={"auto"}>{description}</textarea>
            ) : null}
          </div>
        </div>
        <Button.Icon action={"delete"} handleClick={deleteTask} />
      </div>
    );
  },

  New: ({ handleChange, submit, modal }) => {
    return (
      <>
        <div className='flex-group'>
          <h2>New Task</h2>
          <button
            onClick={() => {
              modal(false);
            }}>
            close
          </button>
        </div>

        <form>
          <div className='form-group'>
            <label>Title</label>
            <input
              type='text'
              name='title'
              placeholder='Bake a cake'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea
              name='description'
              placeholder='Bake a cake'
              onChange={handleChange}></textarea>
          </div>

          <div className='form-group'>
            <label>Category</label>
            <div className='auto-grid'>
              <input
                name='tag'
                className='btn-tag'
                type='button'
                value={"Work"}
                onClick={handleChange}
              />
              <input
                name='tag'
                className='btn-tag'
                type='button'
                value={"Fitness"}
                onClick={handleChange}
              />
              <input
                name='tag'
                className='btn-tag'
                type='button'
                value={"Family"}
                onClick={handleChange}
              />
              <input
                name='newTag'
                className='btn-tag'
                type='button'
                value={"New Tag"}
              />
            </div>
          </div>
          <h3>Set Reminder</h3>
          <div className='flex-group'>
            <div className='form-group'>
              <label>Date</label>
              <input
                type='date'
                name='date'
                placeholder='Bake a cake'
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Time</label>
              <input
                type='time'
                name='time'
                placeholder='Bake a cake'
                onChange={handleChange}
              />
            </div>
          </div>
          <button type='submit' className='btn' onClick={submit}>
            Add Task
          </button>
        </form>
      </>
    );
  },
};
