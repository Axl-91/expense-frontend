import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="flex flex-col grow items-center justify-center h-full gap-5">
      <div className="text-gray-300 text-3xl animate-pulse">
        Loading reports...
      </div>
      <CircularProgress size="3rem" />
    </div>
  )
}
