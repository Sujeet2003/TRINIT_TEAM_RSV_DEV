import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function Guide() {
  return (
    <Card className='mt-72 mx-28'>
    <h1 className='text-3xl font-bold mb-4'>User Guide</h1>
    <Box
      component="ul"
      sx={{ display: 'flex',alignItems:"center",justifyContent:"center", gap: 2,}}
    > 
      <Card component="li" sx={{ minWidth: 300,maxWidth: 600, height:300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </Card>
  );
}