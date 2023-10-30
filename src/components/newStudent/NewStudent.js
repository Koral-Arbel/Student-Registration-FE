import React from "react";
import "./NewStudent.css";
import StudentForm from "./StudentForm";

function NewStudent(props) {

  const saveRegisteredStudentDataHandler = (enterRegisteredStudentData)
  console.log("this is enterRegisteredStudentData: " + JSON.stringify(enterRegisteredStudentData));
  return (
    <div className="new-registration">
      <StudentForm courses={props.courses}
      onSaveRegisteredStudentData={saveRegisteredStudentDataHandler}></StudentForm>
    </div>
  );
}

export default NewStudent;