import { Box } from "@mui/material"
import { Counter1, Counter2 } from "~/components/Counter"

export const Minimal = () => (
  <Box display="flex" gap="30px">
    <Counter1 />
    <Counter2 />
  </Box>
)
