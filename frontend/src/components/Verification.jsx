import React from "react";
import { Box, TextInput, Button, FileInput } from "@mantine/core";

export const Verification = () => {
  return (
    <Box className="form">
      <form>
        <TextInput label="Product SN" />
        <TextInput label="Consumer Code" />
      </form>
      <Button className="btn" type="submit">
        Get Product Status
      </Button>
    </Box>
  );
};
