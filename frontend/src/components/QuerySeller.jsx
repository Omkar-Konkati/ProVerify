import React from "react";
import { Box, TextInput, Button } from "@mantine/core";

export const QuerySeller = () => {
  return (
    <Box className="form">
      <form>
        <TextInput label="Manufacturer Code" />
      </form>
      <Button className="btn" type="submit">
        Get Seller
      </Button>
    </Box>
  );
};
