import React, { useState } from 'react';
import '../App.css';

const App = () => {
  const initialStudents = [
    { id: 1, name: 'John Doe', status: 'Absent' },
    { id: 2, name: 'Jane Smith', status: 'Absent' },
    { id: 3, name: 'Alice Johnson', status: 'Absent' },
    { id: 4, name: 'Bob Brown', status: 'Absent' },
    { id: 5, name: 'Charlie Davis', status: 'Absent' },
    // Add more students here
  ];

  const [students, setStudents] = useState(initialStudents);
  const [newStudentName, setNewStudentName] = useState("");

  const markAttendance = (id, status) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, status: status } : student
    ));
  };

  const addStudent = () => {
    if (newStudentName.trim() !== "") {
      const newStudent = {
        id: students.length + 1,
        name: newStudentName,
        status: 'Absent'
      };
      setStudents([...students, newStudent]);
      setNewStudentName("");
    }
  };

  return (
    <div className="App">
      <h1>Student Attendance System</h1>
      <div>
        <input 
          type="text" 
          placeholder="Enter student name" 
          value={newStudentName} 
          onChange={(e) => setNewStudentName(e.target.value)} 
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.status}</td>
              <td className="actions-btn">
                <button onClick={() => markAttendance(student.id, 'Present')}>Present</button>
                <button onClick={() => markAttendance(student.id, 'Absent')}>Absent</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
