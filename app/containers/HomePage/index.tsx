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

const studentList = [
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
];

const editStudent = (student) => {
  //do edit stuff
  console.log('edit', student);
}

const deleteStudent = (student) => {
  //do delete stuff
  console.log('delete', student);
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
          <button onClick={() => deleteStudent(student)}>Delete</button>
        </td>
      </tr>
    )
  })
}

export default function HomePage() {
  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <div>
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
