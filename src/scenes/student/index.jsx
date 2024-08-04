import { tokens } from "../../theme";
import Header from "../../components/Header";

import React, { useState } from 'react';
import { Box, Typography, useTheme, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';

const Student = () => {
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
      <Header title="SCHOLAR" subtitle="Add Scholar" />
      <Box mt="20px" mb="20px">
        <Typography variant="h6" gutterBottom>{newInvoice.id ? 'Edit Invoice' : 'Add New Scholar'}</Typography>
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
                <Box display="flex" gap="20px"   sx={{ padding: '7px' }}>
                  <Button variant="contained" color="primary"   onClick={() => handleEdit(params.row)} >Edit</Button>
                  <Button variant="contained" color="secondary"   onClick={() => handleDelete(params.row.id)} >Delete</Button>
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

export default Student;
