import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
// import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useDispatch, useSelector } from "react-redux";
import { TimePicker, DatePicker, message } from "antd";
const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  // console.log(params);
  const [doctors, setDoctors] = useState([]);
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  // const [isAvailable, setIsAvailable] = useState();
  // const dispatch = useDispatch();
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById",
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //  ========== booking func
  // const handleBooking = async () => {
  //   try {
  //     dispatch(showLoading());
  //     const res = await axios.post(
  //       "/api/v1/user/book-Appointment",
  //       {
  //         doctorId: params.doctorId,
  //         userId: user._id,
  //         doctorInfo: doctors,
  //         date: date,
  //         userInfo: user,
  //         time: time,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     dispatch(hideLoading());
  //     if (res.data.success) {
  //       message.success(res.data.message);
  //     }
  //   } catch (error) {
  //     dispatch(hideLoading());
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <h3>Booking Page</h3>
      <div className="container">
        {doctors && (
          <div>
            <h4>
              Dr.{doctors.firstName}
              {doctors.lastName}
            </h4>
            <h4>Fees:{doctors.feesPerCunsaltation}</h4>
            <h4>Experience:{doctors.experience}</h4>
            <h4>{/* Timings:{doctors.timings[0]}-{doctors.timings[1]} */}</h4>
            <div className="d-flex flex-column w-50">
              <DatePicker
                className="m-2"
                format="DD-MM-YYYY"
                onChange={(value) =>
                  setDate(moment(value).format("DD-MM-YYYY"))
                }
              />
              <TimePicker
                format="HH:mm"
                className="m-2"
                onChange={(value) =>
                  setTime([
                    moment(value[0]).format("HH:mm"),
                    moment(value[1]).format("HH:mm"),
                  ])
                }
              />
              <button className="btn btn-primary mt-2">
                Check Availablity
              </button>

              {/* <button className="btn btn-dark mt-2" onClick={handleBooking}>
                Book now
              </button> */}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
