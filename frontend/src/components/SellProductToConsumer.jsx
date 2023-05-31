import React, { useState } from "react";
import { Box, TextInput, Button, FileInput } from "@mantine/core";

export const SellProductToConsumer = () => {
  return (
    <Box className="form">
      <form>
        <TextInput label="Product SN" />
        <TextInput label="Consumer Code" />
      </form>
      <Button className="btn" type="submit">
        Sell to Consumer
      </Button>
    </Box>
  );
};
