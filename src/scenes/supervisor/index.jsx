/*import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;*/
/*import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "School",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Scholar Information"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          
        />
      </Box>

    </Box>
    <ProductConsumer>
          {(value) => {
            return (
              <Table size="sm" variant="dark" striped bordered hover>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Information</th>
                    <th>Company</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"title")}}/></td>
                    <td><input type="text" value={value.info} onChange={(e)=>{value.updateValue(e,"info")}}/></td>
                    <td><input type="text" value={value.price} onChange={(e)=>{value.updateValue(e,"price")}}/></td>
                    <td><input type="text" value={value.company} onChange={(e)=>{value.updateValue(e,"company")}}/></td>
                    <td><Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id?"Save":"Add new row"}</Button></td>
                    </tr>
                
                
                  {value.Alldata.map(product => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.info}</td>
                      <td>{product.company}</td>
                      <td>
                        <Button size="sm" variant="primary" onClick={() => value.onEdit(product.id)}>
                          Edit
                        </Button>|
                        <Button size="sm" variant="danger" onClick={() => value.onDelete(product.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            );
          }}
        </ProductConsumer>
  );
};

export default Contacts;*/
/*import React from "react";
import { Table} from 'react-bootstrap';

import { Box, Button} from "@mui/material";

import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { ProductConsumer } from "../../Context"; 

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "School",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (product) => (
        <ProductConsumer>
          {(value) => (
            <>
              <Button
                size="small"
                color="primary"
                onClick={() => value.onEdit(product.id)}
              >
                Edit
              </Button>
              <Button
                size="small"
                color="secondary"
                onClick={() => value.onDelete(product.id)}
              >
                Delete
              </Button>
              
            </>
          )}
        </ProductConsumer>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="Scholar Information" subtitle="List of Contacts for Future Reference" />
      <Box m="40px 0 0 0" height="75vh" sx={{
        "& .MuiDataGrid-root": { border: "none" },
        "& .MuiDataGrid-cell": { borderBottom: "none" },
        "& .name-column--cell": { color: colors.greenAccent[300] },
        "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
        "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
        "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700] },
        "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": { color: `${colors.grey[100]} !important` },
      }}>
        {/*<ProductConsumer>
          {(value) => (
            <>
             {/* <Button variant="contained" color="primary" onClick={value.onAdd} style={{ marginBottom: 16 }}>
             <Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id?"Save":"Add new row"}
                Add New Contact
              </Button>
              <DataGrid
                rows={value.Alldata}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
              />
            </>
          )}
        </ProductConsumer>*/
        /*<ProductConsumer>
          {(value) => {
            return (
              <Table size="sm" variant="dark" striped bordered hover>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Information</th>
                    <th>Company</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"title")}}/></td>
                    <td><input type="text" value={value.info} onChange={(e)=>{value.updateValue(e,"info")}}/></td>
                    <td><input type="text" value={value.price} onChange={(e)=>{value.updateValue(e,"price")}}/></td>
                    <td><input type="text" value={value.company} onChange={(e)=>{value.updateValue(e,"company")}}/></td>
                    <td><Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id?"Save":"Add new row"}</Button></td>
                    </tr>
                
                
                  {value.Alldata.map(product => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.info}</td>
                      <td>{product.company}</td>
                      <td>
                        <Button size="sm" variant="primary" onClick={() => value.onEdit(product.id)}>
                          Edit
                        </Button>|
                        <Button size="sm" variant="danger" onClick={() => value.onDelete(product.id)}>
                          Delete
                        </Button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            );
          }}
        </ProductConsumer>
      </Box>
    </Box>
  );
};

export default Line;*/
/*import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Table, Button } from 'react-bootstrap';



export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h3>CRUD Operations</h3>
        <ProductConsumer>
          {(value) => {
            return (
              <Table size="sm" variant="dark" striped bordered hover>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Information</th>
                    <th>Company</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"title")}}/></td>
                    <td><input type="text" value={value.info} onChange={(e)=>{value.updateValue(e,"info")}}/></td>
                    <td><input type="text" value={value.price} onChange={(e)=>{value.updateValue(e,"price")}}/></td>
                    <td><input type="text" value={value.company} onChange={(e)=>{value.updateValue(e,"company")}}/></td>
                    <td><Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id?"Save":"Add new row"}</Button></td>
                    </tr>
                
                
                  {value.Alldata.map(product => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.info}</td>
                      <td>{product.company}</td>
                      <td>
                        <Button size="sm" variant="primary" onClick={() => value.onEdit(product.id)}>
                          Edit
                        </Button>|
                        <Button size="sm" variant="danger" onClick={() => value.onDelete(product.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

*/
/*import React from "react";
import { Table, Button } from 'react-bootstrap'; // Import Bootstrap components
import { Box } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { ProductConsumer } from "../../Context"; 

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "School",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (product) => (
        <ProductConsumer>
          {(value) => (
            <>
              <Button
                size="small"
                variant="primary"
                onClick={() => value.onEdit(product.id)}
              >
                Edit
              </Button>
              <Button
                size="small"
                variant="danger"
                onClick={() => value.onDelete(product.id)}
              >
                Delete
              </Button>
              
            </>
          )}
        </ProductConsumer>
      ),
    },
  ];

  return (
    <Box className="container mt-4"> {/* Use Bootstrap container class *//*}
      <Header title="Scholar Information" subtitle="List of Contacts for Future Reference" />
      <Box className="mt-4" style={{ height: '75vh' }}>
        <ProductConsumer>
          {(value) => (
            <Table responsive striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      value={value.name}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "name")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.age}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "age")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.info}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "info")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.company}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "company")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.price}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "price")}
                    />
                  </td><td>
                    <input
                      type="text"
                      value={value.address}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "address")}
                    />
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => value.onSave(value.id)}
                    >
                      {value.id ? "Save" : "Add new row"}
                    </Button>
                  </td>
                </tr>

                {value.Alldata.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.age}</td>
                    <td>{product.phone}</td>
                    <td>{product.email}</td>
                    <td>{product.address}</td>
                    <td>{product.city}</td>
                    <td>
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => value.onEdit(product.id)}
                      >
                        Edit
                      </Button>{''}
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => value.onDelete(product.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </ProductConsumer>
      </Box>
    </Box>
  );
};
export default Line;*/


import { tokens } from "../../theme";
import Header from "../../components/Header";

import React, { useState } from 'react';
import { Box, Typography, useTheme, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';

const Supervisor = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Initial data and state management
  const [invoices, setInvoices] = useState([
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com',  trn: '121002' },
    // Add more initial invoices here...
  ]);

  const [newInvoice, setNewInvoice] = useState({ id: null, name: '', phone: '', email: '', trn: '' });
  const [columns, setColumns] = useState([
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
   /* { field: 'cost', headerName: 'Cost', flex: 1, renderCell: (params) => <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography> },
  */
    { field: 'trn', headerName: 'TRN Number', flex: 1 },
  ]);
  
  const [newField, setNewField] = useState('');
  const [open, setOpen] = useState(false);

  // Add or update an invoice
  const handleSave = () => {
    if (newInvoice.id) {
      // Update existing invoice
      setInvoices(invoices.map(item => (item.id === newInvoice.id ? newInvoice : item)));
    } else {
      // Add new invoice
      const newId = invoices.length ? invoices[invoices.length - 1].id + 1 : 1;
      setInvoices([...invoices, { ...newInvoice, id: newId, trn: parseFloat(newInvoice.trn) }]);
    }
    setNewInvoice({ id: null, name: '', phone: '', email: '',  trn: '' }); // Reset the form
  };

  // Delete an invoice
  const handleDelete = (id) => {
    setInvoices(invoices.filter(invoice => invoice.id !== id));
  };

  // Edit an invoice
  const handleEdit = (invoice) => {
    setNewInvoice(invoice);
  };

  // Handle dialog open/close
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Add a new column dynamically
  const handleAddColumn = () => {
    if (newField) {
      const newColumn = {
        field: newField,
        headerName: newField.charAt(0).toUpperCase() + newField.slice(1),
        flex:1,
        renderCell: (params) => <Typography>{params.row[newField]}</Typography>,
      };

      // Add new column before the actions column
      setColumns([...columns.slice(0, -1), newColumn, columns[columns.length - 1]]);
      setInvoices(invoices.map(invoice => ({ ...invoice, [newField]: '' })));
      setNewInvoice({ ...newInvoice, [newField]: '' });
      setNewField('');
      handleClose();
    }
  };

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box mt="20px" mb="20px">aa
        <Typography variant="h6" gutterBottom>{newInvoice.id ? 'Edit Invoice' : 'Add New Invoice'}</Typography>
        <Box component="form" display="flex" gap="10px" flexWrap="wrap" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <TextField
            label="Name"
            value={newInvoice.name}
            onChange={(e) => setNewInvoice({ ...newInvoice, name: e.target.value })}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Phone"
            value={newInvoice.phone}
            onChange={(e) => setNewInvoice({ ...newInvoice, phone: e.target.value })}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Email"
            value={newInvoice.email}
            onChange={(e) => setNewInvoice({ ...newInvoice, email: e.target.value })}
            variant="outlined"
            fullWidth
          />
          {/*<TextField
            label="Cost"
            value={newInvoice.cost}
            onChange={(e) => setNewInvoice({ ...newInvoice, cost: e.target.value })}
            variant="outlined"
            fullWidth
          />*/}
         
          <TextField
            label="TRN Number"
            value={newInvoice.trn}
            onChange={(e) => setNewInvoice({ ...newInvoice, trn: e.target.value })}
            variant="outlined"
            fullWidth
          />
          {columns
            .filter(column => !['id', 'name', 'phone', 'email',  'trn', 'actions'].includes(column.field))
            .map((column, index) => (
              <TextField
                key={index}
                label={column.headerName}
                value={newInvoice[column.field]}
                onChange={(e) => setNewInvoice({ ...newInvoice, [column.field]: e.target.value })}
                variant="outlined"
                fullWidth
              />
          ))}
          <Button type="submit" variant="contained" color="primary">
            {newInvoice.id ? 'Update' : 'Add'}
          </Button>
        </Box>
      </Box>
      <Box mb="20px">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          <AddIcon /> Add Column
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Column</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Column Name"
              fullWidth
              value={newField}
              onChange={(e) => setNewField(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAddColumn} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box>
        <DataGrid
          rows={invoices}
          columns={[
            ...columns,
            {
              field: 'actions',
              headerName: 'Actions',
              flex: 1,
              renderCell: (params) => (
                <Box display="flex" gap="10px">
                  <Button variant="contained" color="primary" onClick={() => handleEdit(params.row)}>Edit</Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(params.row.id)}>Delete</Button>
                </Box>
              ),
            },
          ]}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            "& .MuiDataGrid-root": { border: "none" },
            "& .MuiDataGrid-cell": { borderBottom: "none" },
            "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
            "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
            "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700] },
            "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
          }}
        />
      </Box>
    </Box>
  );
};

export default Supervisor;
