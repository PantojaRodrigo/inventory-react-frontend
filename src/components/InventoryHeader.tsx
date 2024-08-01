import React from "react";
import { Grid, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import SearchField from "../components/SearchField";

interface InventoryHeaderProps {
  itemsLength: number;
  queryLoading: boolean;
  search: (str: string) => void;
}

const InventoryHeader: React.FC<InventoryHeaderProps> = ({
  itemsLength,
  queryLoading,
  search,
}) => (
  <Grid
    container
    direction="row"
    justifyContent="space-between"
    maxWidth="md"
    spacing={1}
    marginY={2}
  >
    <Grid item xs={5} md={7} sx={{ my: "auto" }}>
      {!queryLoading && (
        <Typography variant="h6" gutterBottom marginY="auto">
          Showing {itemsLength} items
        </Typography>
      )}
    </Grid>
    <Grid item xs={5} md={3} sx={{ my: "auto" }} minWidth={50}>
      <SearchField searchFn={search} />
    </Grid>
    <Grid item>
      <Link to="newItem">
        <Fab color="primary" aria-label="add" size="medium">
          <AddIcon />
        </Fab>
      </Link>
    </Grid>
  </Grid>
);

export default InventoryHeader;
