"use client";

import React, { useEffect, useState } from "react";
import { Grid, Button, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination } from "@mui/material";
import api from '../../../services/api.js'; // Import the Axios instance

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch customers from the API
  useEffect(() => {
    const fetchCustomers = async (page) => {
      try {
        const response = await api.get(`/customers/getAll`, {
          params: { page, limit: 10 } // Request specific page with a limit of 10 customers per page
        });
        console.log("API Response:", response);
        console.log("customer",response.data.customers)
        if (response && response.data && response.data.customers) {
          setCustomers(response.data.customers);
          setTotalPages(response.data.data.totalPages);
        } else {
          console.error("Unexpected API response format");
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers(page);
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Grid container>  
      <Grid item xs={12} style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Typography variant="h5" style={{ marginLeft: "20px" }}>Customers Details :</Typography>
        <Button variant="outlined" style={{marginLeft:"220px"}}>Category</Button>
        <Button variant="outlined" onClick={() => console.log("Bulk Action clicked")}>Bulk Action</Button>
        <Button variant="outlined" onClick={() => console.log("Filter clicked")}>Filter</Button>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="customer table">
            <TableHead>
              <TableRow>
                <TableCell>Sr.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone No</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.length > 0 ? (
                customers.map((customer, index) => (
                  <TableRow key={customer._id}>
                    <TableCell>{(page - 1) * 10 + index + 1}</TableCell>
                    <TableCell>{`${customer.first_name} ${customer.last_name}`}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone || "N/A"}</TableCell>
                    <TableCell>{customer.address || "N/A"}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary">Details</Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No customers found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* Pagination Controls */}
      <Grid item xs={12} style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Grid>
    </Grid>
  );
};

export default Customers;
