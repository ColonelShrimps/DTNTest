/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ConfirmationDialog from '../../dialogs/confirmationDialog/ConfirmationDialog';

const [isConfirmationDialogVisible, setIsConfirmationDialogVisible] = React.useState(false);
const [confirmationMessage, setConfirmationMessage] = React.useState('Are You sure?');
const [confirmationMethodToExecute, setConfirmationMethodToExecute] = React.useState(()=>{});
const [selectedStudent, setSelectedStudent] = React.useState({});
const [isAddingNewStudent, setIsAddingNewStudent] = React.useState(false);
const [newStudent, setNewStudent] = React.useState({});
const [studentList, setStudentList] = React.useState([
  {
    firstName: 'Optimus',
    lastName: 'Prime',
    email: 'trucklover@gmail.com',
    age: 10,
    grade: '3rd'
  },
  {
    firstName: 'Count',
    lastName: 'Dragula',
    email: 'bigsucc@gmail.com',
    age: 17,
    grade: '11th'
  },
  {
    firstName: 'Mother',
    lastName: 'Theresa',
    email: 'theo.g.saint@gmail.com',
    age: 87,
    grade: '12th'
  },
  {
    firstName: 'Darth',
    lastName: 'Vader',
    email: 'whosyourdaddy@gmail.com',
    age: 45,
    grade: '10th'
  }
]);

const editStudent = (student) => {
  //do edit stuff
  console.log('edit', student);
}

const deleteStudent = (student) => {
  //Filters student list by email to remove the selected students email
  let filteredStudentList = studentList.filter(x => x.email !== student.email );
  setStudentList(filteredStudentList);
  closeConfirmationDialog();
}

const addStudent = () => {
  let tempStudentList = {...studentList};
  tempStudentList.push(newStudent);
  setStudentList(tempStudentList);
  setNewStudent({});
  setIsAddingNewStudent(false);
}

const closeConfirmationDialog = () => {
  setIsConfirmationDialogVisible(false);
}

const openConfirmationDialog = (student) => {
  setSelectedStudent(student);
  setConfirmationMessage(`Are you sure you would like to delete the student record for ${student.firstName} ${student.lastName}?`)
  setIsConfirmationDialogVisible(true);
}

const handlenewStudentFirstNameChange = (name) => {
  let tempNewStudent = {...newStudent};
  tempNewStudent.firstName = name;
  setNewStudent(tempNewStudent);
}

const handlenewStudentLastNameChange = (name) => {
  let tempNewStudent = {...newStudent};
  tempNewStudent.lastName = name;
  setNewStudent(tempNewStudent);
}

const handlenewStudentEmailChange = (email) => {
  let tempNewStudent = {...newStudent};
  tempNewStudent.email = email;
  setNewStudent(tempNewStudent);
}

const handlenewStudentAgeChange = (age) => {
  let tempNewStudent = {...newStudent};
  tempNewStudent.age = age;
  setNewStudent(tempNewStudent);
}

const handlenewStudentGradeChange = (grade) => {
  let tempNewStudent = {...newStudent};
  tempNewStudent.grade = grade;
  setNewStudent(tempNewStudent);
}

const renderList = () => {
  return studentList.map((student) => {
    return (
      <tr>
        <td>{student.lastName}</td>
        <td>{student.firstName}</td>
        <td>{student.email}</td>
        <td>{student.age}</td>
        <td>{student.grade}</td>
        <td>
          <button onClick={() => editStudent(student)}>Edit</button>
          <button onClick={() => openConfirmationDialog(student)}>Delete</button>
        </td>
        {isAddingNewStudent && (<tr>
          <form onSubmit={addStudent}>
            <td>
              <label>
                First Name:
                <input type="text" value={newStudent.name} onchange={(event) => handlenewStudentFirstNameChange(event.target.value)}></input>
              </label>
            </td>
            <td>
              <label>
                Last Name:
                <input type="text" value={newStudent.name} onchange={(event) => handlenewStudentLastNameChange(event.target.value)}></input>
              </label>
            </td>
            <td>
              <label>
                Email:
                <input type="text" value={newStudent.name} onchange={(event) => handlenewStudentEmailChange(event.target.value)}></input>
              </label>
            </td>
            <td>
              <label>
                Age:
                <input type="text" value={newStudent.name} onchange={(event) => handlenewStudentAgeChange(event.target.value)}></input>
              </label>
            </td>
            <td>
              <label>
                Grade:
                <input type="text" value={newStudent.name} onchange={(event) => handlenewStudentGradeChange(event.target.value)}></input>
              </label>
              <input type="submit" value="Submit" />
            </td>
          </form>
          <button onClick={() => {setIsAddingNewStudent(false); setNewStudent({});}}>Cancel</button>
        </tr>)}
      </tr>
    )
  })
}

export default function HomePage() {
  return (
    <>
        <ConfirmationDialog
          visible={isConfirmationDialogVisible}
          hideDialog={closeConfirmationDialog}
          confirmationMessage={confirmationMessage}
          methodToExecute={deleteStudent}
          variable={selectedStudent}
        />
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <div>
        <button onClick={() => setIsAddingNewStudent(true)}>Add New Student</button>
        <table>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
          {renderList()}
          </table>
        
      </div>
    </>
  );
}
