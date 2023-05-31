import React from "react";
import { Box, TextInput, Button } from "@mantine/core";
export const ProductForSale = () => {
  return (
    <Box className="form">
      <form>
        <TextInput label="Seller Code" />
      </form>
      <Button className="btn" type="submit">
        Submit
      </Button>
    </Box>
  );
};
