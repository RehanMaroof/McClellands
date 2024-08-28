"use client";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
} from "@mui/material";
import api from "../../../services/api.js"; // Import the Axios instance

const JobApplications = () => {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch customers from the API
  useEffect(() => {
    const fetchCustomers = async (page) => {
      try {
        const response = await api.get(`/jobs/getAll`, {
          params: { page, limit: 10 }, // Request specific page with a limit of 10 customers per page
        });
        console.log("API Response:", response);

        if (response && response.data && response.data.jobs) {
          setCustomers(response.data.jobs);
          setTotalPages(response.data.totalPages);
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
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h5" style={{ marginLeft: "20px" }}>
        Job Application :
        </Typography>
        <Button variant="outlined" style={{ marginLeft: "20px" }}>
          Category
        </Button>
        <Button
          variant="outlined"
          onClick={() => console.log("Bulk Action clicked")}
        >
          Bulk Action
        </Button>
        <Button
          variant="outlined"
          onClick={() => console.log("Filter clicked")}
        >
          Filter
        </Button>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="Jobs table">
            <TableHead>
              <TableRow>
                <TableCell>Sr.</TableCell>
                <TableCell>jobId</TableCell>
                {/* <TableCell>Email</TableCell> */}
                <TableCell>customer_id</TableCell>
                <TableCell>description</TableCell>
                <TableCell>Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.length > 0 ? (
                customers.map((customer, index) => (
                  <TableRow key={customer._id}>
                    <TableCell>{(page - 1) * 10 + index + 1}</TableCell>
                    <TableCell>{customer.jobId}</TableCell>
                    {/* <TableCell>{customer.email}</TableCell> */}
                    <TableCell>{customer.customer_id || "N/A"}</TableCell>
                    <TableCell>{customer.description || "N/A"}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary">
                        Details
                      </Button>
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
      <Grid
        item
        xs={12}
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
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

export default JobApplications;
