import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataApplication } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Application = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "batch", headerName: "Batch", flex: 0.5 ,cellClassName: "name-column--cell" },
    { field: "school", headerName: "School",flex: 0.5 ,cellClassName: "name-column--cell" },
    { field: "course", headerName: "Course", flex: 0.5 ,cellClassName: "name-column--cell"},
    { field: "department", headerName: "Department", flex: 0.5 ,cellClassName: "name-column--cell"},
    { field: "appnumber", headerName: "Application Number", flex: 0.5,cellClassName: "name-column--cell" },
    { field: "trn", headerName: "TRN Number", flex: 0.5 ,cellClassName: "name-column--cell"},
    { field: "Temproll", headerName: "Temporary Roll Number", flex: 0.5,cellClassName: "name-column--cell" },
    { field: "registration", headerName: "Registration Number", flex: 0.5 ,cellClassName: "name-column--cell"},
    { field: "rdate", headerName: "Registration Date", flex: 0.5 ,cellClassName: "name-column--cell"},
    { field: "enrollmentnumber", headerName: "Enrollment Ac Number", flex: 0.5 ,cellClassName: "name-column--cell"},
    { field: "enrolldate", headerName: "Enrollment Ac Date", flex: 0.5 ,cellClassName: "name-column--cell"},
    { field: "passingyear", headerName: "Passing Year", flex: 0.5,cellClassName: "name-column--cell" },
    { field: "examnumber", headerName: "Department", flex: 0.5 ,cellClassName: "name-column--cell"},
   
    


    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
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
   
  ];

  return (
    <Box m="20px">
      <Header
        title="Information of Scholars"
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
          rows={mockDataApplication}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Application;