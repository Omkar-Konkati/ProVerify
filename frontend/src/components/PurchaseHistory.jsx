import React from "react";
import { Box, TextInput, Button } from "@mantine/core";

export const PurchaseHistory = () => {
  return (
    <Box className="form">
      <form>
        <TextInput label="Consumer Code" />
      </form>
      <Button className="btn" type="submit">
        Get Products
      </Button>
    </Box>
  );
};
