import './App.css'
import { AppBar, Box, Button, Container, Toolbar, Typography, Paper } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import banglesImage from './assets/images/bangles.png';



function App() {

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My MUI Single Page
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Container>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
              Welcome to MUI Single Page
            </Typography>
            <Typography variant="body1" paragraph>
              This is an example of a single-page layout built using Material-UI components. The page
              includes a responsive header, a content section, and a footer.
            </Typography>
            <Container
              sx={{
                display: 'flex',
                gap: 5
              }}>

              <Card
                sx={{
                  width: '20vw',

                }}
              >
                <CardHeader
                  title="Item 1"
                  subheader="Jewelry"
                />
                <CardMedia
                  component="img"
                  height="600"
                  image={banglesImage}
                  alt="Bangles"

                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  width: '20vw',

                }}
              >
                <CardHeader
                  title="Item 1"
                  subheader="Jewelry"
                />
                <CardMedia
                  component="img"
                  height="600"
                  image={banglesImage}
                  alt="Bangles"

                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
              </Card>

            </Container>


          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ py: 2, backgroundColor: "grey.200", mt: "auto" }}>
        <Container>
          <Typography variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} My Single Page App. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default App
