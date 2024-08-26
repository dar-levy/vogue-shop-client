import { Box, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
      <Container sx={{ textAlign: 'center', marginTop: '100px' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          404: Page Not Found
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          The page you’re looking for doesn’t exist or has been moved.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Go to Home
        </Button>
      </Container>
  );
};

export default NotFound;
