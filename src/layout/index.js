import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              {children}
            </Grid>

          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
export default Layout;