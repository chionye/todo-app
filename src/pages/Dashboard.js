import React, { useState, useEffect, useNavigate } from "react";
import "../App.css";
import { Button, Modal, Task } from "../components";
import { Api } from "../api/Api";
import { Storage } from "../storage/Storage";

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(JSON.parse(Storage.get("user")));
  const [active, setActive] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState("");
  const [task, setTask] = useState({
    done: false,
  });

  useEffect(() => {

  });

  const showTasks = () => {
    setActive(0);
  };

  const showHistory = () => {
    setActive(1);
  };
  const deleteTask = (event, key) => {
    tasks.pop(key);
  };

  const addTask = () => {
    setModal(true);
  };

  const saveTask = (e) => {
    e.preventDefault();
    task.email = data.email;
    Api(`/todo`, task, "POST", null)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const filterRecords = (e) => {
    setFilter(e);
  };

  const logout = (e) => {
    Storage.remove();
    navigate("/");
  };

  return (
    <>
      <header className='container header'>
        <div>
          <h1>Agenda</h1>
          <p>{data.email}</p>
        </div>
        <button className='btn' onClick={logout}>log out</button>
      </header>
      <main>
        <section className='container'>
          <h2 className='heading'>categories</h2>
          <div className='grid'>
            <Button.Category
              icon={"material-symbols:work-outline"}
              handleClick={""}
              title={"Work"}
            />
            <Button.Category
              icon={
                "streamline:health-medical-heart-rate-health-beauty-information-data-beat-pulse-monitor-heart-rate-info"
              }
              handleClick={""}
              title={"Fitness"}
            />
            <Button.Category
              icon={"map:beauty-salon"}
              handleClick={""}
              title={"Beauty"}
            />
            <Button.Category
              icon={"carbon:pedestrian-family"}
              handleClick={""}
              title={"Family"}
            />
            <Button.Category
              icon={"basil:group-151-outline"}
              handleClick={""}
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
              {tasks.map((item, key) => {
                return (
                  <Task.Item
                    key={key}
                    taskId={item.id}
                    title={item.title}
                    done={item.done}
                    deleteTask={(e) => deleteTask(e, key)}
                  />
                );
              })}
              <button onClick={addTask} className='btn'>
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
