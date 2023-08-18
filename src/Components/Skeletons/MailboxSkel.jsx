import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const MailboxSkel = () => {
  return (
    <div className="lg:mt-[50px] md:mt-[50px]  w-[100%] flex justify-center items-center">
      <Box
        sx={{
          display: "flex",
          height: "500px",
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        <Skeleton variant="rounded" width="33%" height={400} />

        <Skeleton variant="rounded" width="62%" height={400} />
      </Box>
    </div>
  );
};

export default MailboxSkel;
