import React, { useState } from "react";
import { Box, TextInput, Button, FileInput } from "@mantine/core";

export const SellProductToSeller = () => {
  return (
    <Box className="form">
      <form>
        <TextInput label="Product SN" />
        <TextInput label="Seller Code" />
      </form>
      <Button className="btn" type="submit">
        Add the Seller
      </Button>
    </Box>
  );
};
