import React from "react";
import { Box, TextInput, Button } from "@mantine/core";
export const AddProduct = () => {
  return (
    <Box className="form">
      <form>
        <TextInput label="Manufacturer Id" />
        <TextInput label="Product Name" />
        <TextInput label="Product SN" />
        <TextInput label="Product Brand" />
        <TextInput label="Product Price" />
      </form>
      <Button className="btn" type="submit">
        Add the Product
      </Button>
    </Box>
  );
};
