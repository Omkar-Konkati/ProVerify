import React from "react";
import { Box, TextInput, Button } from "@mantine/core";

export const AddSeller = () => {
  return (
    <Box className="form">
      <form>
        <TextInput label="Seller Name" />
        <TextInput label="Seller Brand" />
        <TextInput label="Seller Code" />
        <TextInput label="Seller Phone No." />
        <TextInput label="Seller Address" />
        <TextInput label="Seller Manager" />
        <TextInput label="Manufacturer ID" />
      </form>
      <Button className="btn" type="submit">
        Add the Seller
      </Button>
    </Box>
  );
};
