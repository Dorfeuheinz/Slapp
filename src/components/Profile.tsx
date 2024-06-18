import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import { Edit, Logout } from '@mui/icons-material';

const Profile: React.FC<{logout: () => void}> = ({logout}) => {

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4', // Placeholder avatar
  };

  return (
    <Container maxWidth="xl">
      <Card sx={{ marginTop: 4, padding: 3, background: "transparent" }}>
        <CardHeader
          avatar={
            <Avatar
              alt={user.name}
              src={user.avatarUrl}
              sx={{ width: 80, height: 80 }}
            />
          }
          title={<Typography variant="h5">{user.name}</Typography>}
          subheader={<Typography variant="body2" color="textSecondary">{user.email}</Typography>}
          sx={{ textAlign: 'center' }}
        />
        <CardContent>
          <Divider variant="middle" sx={{ marginY: 2 }} />
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Edit />}
              >
                Edit Profile
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Logout />}
                onClick={logout}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
  
  export default Profile;