import axios from "axios";
import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const PersonManagement = () => {
  const [arrPerson, setArrPerson] = useState([]);

  const getAllPerson = () => {
    axios({
      url: `https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien`,
      method: "GET",
    })
      .then((response) => {
        console.log("response: ", response.data);

        setArrPerson(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  useEffect(() => {
    getAllPerson();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container p-10">
      <div className=" flex justify-between">
        <NavLink
          to={"/admin/add-person"}
          className={"bg-red-500 text-white rounded-md p-5"}
        >
          Thêm Nhân viên
        </NavLink>

        <div>
          <form
            className="pb-4 bg-white dark:bg-gray-900"
            onSubmit={handleSubmit}
          >
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="p-5">
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Mã nhân viên</Table.HeadCell>
              <Table.HeadCell>Tên nhân viên</Table.HeadCell>
              <Table.HeadCell>chức vụ</Table.HeadCell>
              <Table.HeadCell>hệ số chức vụ</Table.HeadCell>
              <Table.HeadCell>Lương cơ bản</Table.HeadCell>
              <Table.HeadCell>Giờ làm</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {arrPerson?.map((item) => {
                return (
                  <Table.Row
                    key={item.maNhanVien}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {item.maNhanVien}
                    </Table.Cell>
                    <Table.Cell>{item.tenNhanVien}</Table.Cell>
                    <Table.Cell>{item.chucVu}</Table.Cell>
                    <Table.Cell>{item.heSoChucVu}</Table.Cell>
                    <Table.Cell>{item.luongCoBan}</Table.Cell>
                    <Table.Cell>{item.soGioLamTrongThang}</Table.Cell>

                    <Table.Cell>
                      <NavLink
                        to={`/admin/edit-person/${item.maNhanVien}`}
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Edit
                      </NavLink>
                    </Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-red-600 hover:underline dark:text-red-500"
                      >
                        Delete
                      </a>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PersonManagement;
