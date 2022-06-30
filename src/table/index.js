import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import DocumentForm from './form';
import React, { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
import * as documentAction from '../actions/document.actions';
import { connect } from 'react-redux';
import DocumentPreview from './preview';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(24),
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const drawerWidth = 600;
const CustomizedTables = (props) => {
  const { documents } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openViewDrawer, setOpenViewDrawer] = useState(false);
  const [editData, setEditData] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentIdx, setCurrentIdx] = useState(null)
  const [viewData, setViewData] = useState(null)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleEdit = (row, idx) => {
    setEditData(row);
    setCurrentIdx(idx)
    setOpenDrawer(true);
  }
  const handleDelete = (e, idx) => {
    // setEditData(row);
    e.preventDefault();
    props.deleteDocument(idx);
  }
  const addNew = () => {
    setOpenDrawer(true);
    setEditData({});
  }
  const onCloseDrawer = () => {
    setOpenDrawer(false);
  }
  const onCloseViewDrawer = () => {
    setOpenViewDrawer(false);
    setViewData({});
  }
  const onViewData = (row, idx) => {
    setViewData(row);
    setCurrentIdx(idx)
    setOpenViewDrawer(true);
  }
  return (<>
    <Card>
      <CardContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              List of Documents
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: 18 }} align="right">
              <Button variant="contained" onClick={(e) => { addNew("new") }}>
                Add New
              </Button>
            </Typography>
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Full Name</StyledTableCell>
                <StyledTableCell align="right">Email Id</StyledTableCell>
                <StyledTableCell align="right">Contact Number</StyledTableCell>
                <StyledTableCell align="right">Age</StyledTableCell>
                <StyledTableCell align="right">Gender</StyledTableCell>
                <StyledTableCell align="right">Date of Birth</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documents.length > 0 && documents.map((row, idx) => (
                <StyledTableRow key={row.fullName}>
                  <StyledTableCell component="th" scope="row">
                    {row.fullName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
                  <StyledTableCell align="right">{row.age}</StyledTableCell>
                  <StyledTableCell align="right">{row.gender}</StyledTableCell>
                  <StyledTableCell align="right">{row.dob}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button variant="outlined" color="success" aria-label="edit" onClick={() => handleEdit(row, idx)}>
                      Edit
                    </Button>
                    {" "}
                    <Button variant="outlined" color="success" aria-label="view" onClick={() => onViewData(row, idx)}>
                      View
                    </Button>
                    {/* <Divider orientation="vertical"/> */}
                    {" "}
                    <Button variant="outlined" color="error" onClick={(e) => handleDelete(e, idx)}>
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={documents.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>

    </Card>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      anchor={"right"}
      open={openDrawer}
      onClose={() => onCloseDrawer()}
    >
      <DocumentForm data={editData} {...props} onCloseDrawer={(e) => onCloseDrawer()} currentIdx={currentIdx} />
    </Drawer>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      anchor={"right"}
      open={openViewDrawer}
      onClose={() => onCloseViewDrawer()}
    >
      <DocumentPreview data={viewData} currentIdx={currentIdx} />
    </Drawer>
  </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    documents: state.documents
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createDocument: document => dispatch(documentAction.createDocument(document)),
    updateDocument: document => dispatch(documentAction.updateDocument(document)),
    deleteDocument: index => dispatch(documentAction.deleteDocument(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedTables);