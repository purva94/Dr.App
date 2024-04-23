import React from "react";

const DoctorList = ({ doctor }) => {
  return (
    <>
      <div className="card p-2">
        <div className="card-header">
          DR.{doctor.firstName}
          {doctor.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Specialization : </b>
            {doctor.specialization}
          </p>
          <p>
            <b>Experience : </b>
            {doctor.experience}
          </p>
          <p>
            <b>Fees Per Cunsaltation: </b>
            {doctor.feesPerCunsaltation}
          </p>
          <p>
            <b>Timings: </b>
            {doctor.timings[0]}-{doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
