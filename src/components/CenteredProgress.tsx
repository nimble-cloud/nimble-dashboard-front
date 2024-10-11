import Box from "@mui/material/Box";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";

export default function CenteredProgress({
  color,
}: {
  color?: CircularProgressProps["color"];
}) {
  return (
    <Box sx={{ width: "100%", display: "grid", placeItems: "center" }}>
      <CircularProgress color={color || "primary"} size={28} />
    </Box>
  );
}
