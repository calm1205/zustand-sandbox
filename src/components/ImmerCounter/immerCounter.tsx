import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useImmerCountStore } from "~/lib/immerCountStore"

/**
 * イミュータブルなCounter
 */
export const ImmerCounter: FC = () => {
  const counter = useImmerCountStore()

  return (
    <>
      <p className="">immutable counter: {counter.count}</p>

      <Box display="flex" gap="10px">
        <Button variant="contained" onClick={counter.increaseCount}>
          Increase count
        </Button>
        <Button variant="outlined" onClick={counter.resetCount}>
          Reset count
        </Button>
      </Box>
    </>
  )
}
