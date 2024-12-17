import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PersonManagement from "./page/PersonManagement";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddPerson from "./page/AddPerson";
import Admin from "./layout/Admin";
import EditPerson from "./page/EditPerson";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<PersonManagement />} />
          <Route path="person-management" element={<PersonManagement />} />
          <Route path="add-person" element={<AddPerson />} />
          <Route path="edit-person/:maNhanVien" element={<EditPerson />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
