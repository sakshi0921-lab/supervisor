import React, { useState } from 'react';
import { Box, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../../App.css';

const AttendanceApp = () => {
  const initialStudents = [
    { id: 1, name: 'John Doe', trn: '121002', status: 'Absent' },
    { id: 2, name: 'Jane Smith', trn: '121003', status: 'Absent' },
    { id: 3, name: 'Alice Johnson', trn: '121004', status: 'Absent' },
    { id: 4, name: 'Bob Brown', trn: '121005', status: 'Absent' },
    { id: 5, name: 'Charlie Davis', trn: '121006', status: 'Absent' },
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
      <Box mb={2}>
        <TextField
          variant="outlined"
          className='text'
          label="Enter student name"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={addStudent} 
          className="add"
        >
          Add Student
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(student => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.status}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    color="success" 
                    onClick={() => markAttendance(student.id, 'Present')}
                    className="present"
                  >
                    Present
                  </Button>
                  <Button 
                    variant="contained" 
                    color="error" 
                    onClick={() => markAttendance(student.id, 'Absent')}
                    className="absent"
                  >
                    Absent
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AttendanceApp;
