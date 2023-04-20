/** @format */

import React, { useState } from "react";
import "../App.css";
import { Button, Modal, Task } from "../components";
import { Api } from "../api/Api";
import { Storage } from "../storage/Storage";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(Storage.get("user"));
  const [active, setActive] = useState(0);
  const [tasks, setTasks] = useState(user.todos);
  const [render, setRender] = useState(true);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState([]);
  const [task, setTask] = useState({
    uid: user.id,
  });

  const showTasks = () => {
    setActive(0);
  };

  const showHistory = () => {
    setActive(1);
  };

  const deleteTask = (event, key, id) => {
    Api(`/todo/${id}`, null, "DELETE")
      .then((res) => res.json())
      .then((data) => {
        let val = tasks;
        val.splice(key, 1);
        setTasks(val);
        setRender(!render);
      })
      .catch((err) => console.log(err));
  };

  const openModal = () => {
    setModal(true);
  };

  const saveTask = (e) => {
    e.preventDefault();
    Api(`/todo`, task, "POST")
      .then((res) => res.json())
      .then((data) => {
        let val = tasks;
        val.unshift(data);
        setTasks(val);
        setModal(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const filterTasks = (e) => {
    let filteredTasks;
    filteredTasks = tasks.filter((arr) => {
      return arr.category === e;
    });
    setFilter(filteredTasks);
  };

  const logout = (e) => {
    Storage.remove();
    navigate("/");
  };

  return (
    <>
      <header className='container header'>
        <div>
          <h1>Todo</h1>
          <p>{user.email}</p>
        </div>
        <button className='btn' onClick={logout}>
          log out
        </button>
      </header>
      <main>
        <section className='container'>
          <h2 className='heading'>categories</h2>
          <div className='grid'>
            <Button.Category
              icon={"material-symbols:work-outline"}
              handleClick={() => filterTasks("Work")}
              title={"Work"}
            />
            <Button.Category
              icon={
                "streamline:health-medical-heart-rate-health-beauty-information-data-beat-pulse-monitor-heart-rate-info"
              }
              handleClick={() => filterTasks("Fitness")}
              title={"Fitness"}
            />
            <Button.Category
              icon={"map:beauty-salon"}
              handleClick={() => filterTasks("Beauty")}
              title={"Beauty"}
            />
            <Button.Category
              icon={"carbon:pedestrian-family"}
              handleClick={() => filterTasks("Family")}
              title={"Family"}
            />
            <Button.Category
              icon={"basil:group-151-outline"}
              handleClick={() => filterTasks("Social")}
              title={"Social"}
            />
          </div>
        </section>
        <section className='container'>
          <div className='tabs'>
            <Button.Tab handleClick={showTasks} title={"Tasks"} />
            <Button.Tab handleClick={showHistory} title={"History"} />
          </div>
          {active === 0 ? (
            <Task.Container>
              {filter.length > 0
                ? filter.map((item, key) => {
                    return (
                      <Task.Item
                        key={key}
                        taskId={item.id}
                        title={item.title}
                        done={item.completed}
                        deleteTask={(e) => deleteTask(e, key, item.id)}
                      />
                    );
                  })
                : tasks.map((item, key) => {
                    return (
                      <Task.Item
                        key={key}
                        taskId={item.id}
                        title={item.title}
                        done={item.completed}
                        deleteTask={(e) => deleteTask(e, key, item.id)}
                      />
                    );
                  })}
              <button onClick={openModal} className='btn'>
                Add Task
              </button>
            </Task.Container>
          ) : (
            <div>history</div>
          )}
        </section>
        <Modal
          show={modal}
          close={() => {
            setModal(false);
          }}>
          <Task.New
            handleChange={handleChange}
            submit={saveTask}
            modal={setModal}
          />
        </Modal>
      </main>
    </>
  );
}

export default Dashboard;
