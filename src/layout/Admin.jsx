import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  return (
    <div className="container flex">
      <div className="w-1/6 bg-gray-800 h-screen text-red-500">
        <NavLink to={"/admin/person-management"}>Trang quản lý</NavLink>
      </div>
      <div className="w-5/6">
        <p className="text-red-500 text-4xl font-bold">Quản lý nhân viên</p>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
