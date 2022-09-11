import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/overview/users" element={<FakePage>Users</FakePage>} />
        <Route
          path="/overview/revenue"
          element={<FakePage>Revenue</FakePage>}
        />
      </Routes>
    </BrowserRouter>
  );
};

const FakePage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
`;

export default App;
