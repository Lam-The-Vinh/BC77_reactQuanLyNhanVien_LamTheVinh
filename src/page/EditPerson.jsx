import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPerson = () => {
  const param = useParams();
  const { maNhanVien } = param;

  const navigate = useNavigate();

  const getPersonById = () => {
    axios({
      url: `https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=${maNhanVien}`,
      method: "GET",
    })
      .then((response) => {
        console.log("response: ", response);

        frmEditPerson.setValues(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  useEffect(() => {
    getPersonById();
  }, []);

  const frmEditPerson = useFormik({
    initialValues: {
      maNhanVien: "",
      tenNhanVien: "",
      chucVu: "",
      heSoChucVu: "",
      luongCoBan: "",
      soGioLamTrongThang: "",
      delete: false,
    },

    onSubmit: (values) => {
      console.log("value: ", values);
      axios({
        url: `https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=${values.maNhanVien}`,
        method: "PUT",
        data: values,
      })
        .then((response) => {
          console.log("response: ", response);
          alert("bạn đã update thành công");

          navigate("../person-management");
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    },
  });
  return (
    <div>
      <div className="p-10">
        <h1 className="text-blue-500 text-2xl pb-5">Form edit person</h1>

        <div>
          <div>
            <form
              className="mx-auto flex max-w-md flex-col gap-4"
              onSubmit={frmEditPerson.handleSubmit}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="maNhanVien1" value="Mã nhân viên" />
                </div>
                <TextInput
                  id="maNhanVien"
                  type="id"
                  name="maNhanVien"
                  disabled
                  value={frmEditPerson.values.maNhanVien}
                  onChange={frmEditPerson.handleChange}
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
                  value={frmEditPerson.values.tenNhanVien}
                  onChange={frmEditPerson.handleChange}
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
                  value={frmEditPerson.values.chucVu}
                  onChange={frmEditPerson.handleChange}
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
                  value={frmEditPerson.values.heSoChucVu}
                  onChange={frmEditPerson.handleChange}
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
                  value={frmEditPerson.values.luongCoBan}
                  onChange={frmEditPerson.handleChange}
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
                  value={frmEditPerson.values.soGioLamTrongThang}
                  onChange={frmEditPerson.handleChange}
                />
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPerson;
