import { createContext, useState } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
