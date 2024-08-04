import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataFees } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Fees = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "Receipt_number", headerName: "Receipt number", flex: 0.5 },
    //{ field: "registrarId", headerName: "Registrar ID" },
    {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
    {
      field: "fees",
      headerName: "Total Fees",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
        field: "remaining",
        headerName: "Reamining Fees",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      
     
    
    {
      field: "email",
      headerName: "Email",
      flex: 1,
        cellClassName: "name-column--cell",
    },
    
    {
      field: "fine",
      headerName: "Fines",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    
    
  ];

  return (
    <Box m="20px">
      <Header
        title="Fees Information"
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
          rows={mockDataFees}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Fees;