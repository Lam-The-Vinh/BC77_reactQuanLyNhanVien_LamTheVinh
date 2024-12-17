import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddPerson = () => {
  const navigate = useNavigate();

  const frmAddPerson = useFormik({
    initialValues: {
      maNhanVien: "",
      tenNhanVien: "",
      chucVu: "",
      heSoChucVu: "",
      luongCoBan: "",
      soGioLamTrongThang: "",
      delete: false,
    },

    onSubmit: (value) => {
      console.log("value: ", value);

      axios({
        url: "https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/ThemNhanVien",
        method: "POST",
        data: value,
      })
        .then((response) => {
          console.log("response: ", response);
          alert("thêm sản phẩm thành công");

          navigate("../person-management");
        })
        .catch((err) => {
          console.error("err: ", err);
        });
    },
  });

  return (
    <div className="p-10">
      <h1 className="text-blue-500 text-2xl pb-5">Form add person</h1>

      <div>
        <div>
          <form
            className="mx-auto flex max-w-md flex-col gap-4"
            onSubmit={frmAddPerson.handleSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="maNhanVien1" value="Mã nhân viên" />
              </div>
              <TextInput
                id="maNhanVien"
                type="id"
                name="maNhanVien"
                onChange={frmAddPerson.handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="tenNhanVien1" value="Tên nhân viên" />
              </div>
              <TextInput
                id="tenNhanVien"
                type="text"
                name="tenNhanVien"
                data-type="tenNhanVien"
                onChange={frmAddPerson.handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="chucVu1" value="Chức vụ" />
              </div>
              <TextInput
                id="chucVu"
                type="text"
                name="chucVu"
                data-type="chucVu"
                onChange={frmAddPerson.handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="heSoChucVu1" value="Hệ số chức vụ" />
              </div>
              <TextInput
                id="heSoChucVu"
                type="text"
                name="heSoChucVu"
                data-type="heSoChucVu"
                onChange={frmAddPerson.handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="luongCoBan1" value="Lương cơ bản" />
              </div>
              <TextInput
                id="luongCoBan"
                type="text"
                name="luongCoBan"
                data-type="luongCoBan"
                onChange={frmAddPerson.handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="soGioLamTrongThang1"
                  value="Số giờ làm trong tháng"
                />
              </div>
              <TextInput
                id="soGioLamTrongThang"
                type="text"
                name="soGioLamTrongThang"
                data-type="soGioLamTrongThang"
                onChange={frmAddPerson.handleChange}
              />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPerson;
