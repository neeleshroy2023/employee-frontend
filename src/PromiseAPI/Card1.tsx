
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Card1({ title, type, id, url }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {type}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>{id}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" >
          <a href={url} style={{textDecoration:'none',color:'white'}}>Learn More</a>
        </Button>
      </CardActions>
    </Card>
  );
}
