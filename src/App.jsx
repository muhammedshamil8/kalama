import { Home, NotFound, Result, Schedule, Stage, ScoreBoard } from './pages';
import Layout from '@/components/layout';
import { Routes, Route, Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "stage/:id",
        element: <Stage />,
      },
      {
        path: "scoreboard",
        element: <ScoreBoard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];


function App() {
  return (
    <Routes>
      {routes.map(({ path, element, children }) => (
        <Route key={path} path={path} element={element}>
          {children?.map(({ path: childPath, element: childElement }) => (
            <Route key={childPath} path={childPath} element={childElement} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default App;
