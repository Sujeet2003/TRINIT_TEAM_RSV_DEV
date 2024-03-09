import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/CardContent'

const Desc = () => {
  return (
    <div className="h-[40vh] my-4">
      <Card className="m-4 text-xl">
        <CardContent>
          Welcome to [Your App Name], the ultimate test generator designed to simplify  the process of creating and taking assessments. Whether you're an educator,  trainer, or simply someone looking to evaluate knowledge, our user-friendly  platform empowers you to craft customized tests effortlessly. Say goodbye to   manual question creation and embrace a seamless, efficient testing  experience with our comprehensive test generator.
        </CardContent>
      </Card>

        <div className="cardHolder flex gap-4 m-4">
            <Card variant='outlined' >
                <Typography sx={{ fontSize: 18, fontWeight:"bold" }} color="text.secondary" gutterBottom>
                   Word of the Day
                </Typography>
                <CardContent>Create and customize tests with ease, using our intuitive test generator to craft questions, set time limits, and more.</CardContent>
            </Card>
            <Card variant='outlined'>
                <Typography sx={{ fontSize: 18, fontWeight:"bold" }} color="text.secondary" gutterBottom>
                   Instant Grading and Analysis:
                </Typography>
                <CardContent>Receive immediate results with detailed insights into your performance, helping you understand your strengths and weaknesses.</CardContent>
            </Card>
            <Card variant='outlined'>
                <Typography sx={{ fontSize: 18, fontWeight:"bold" }} color="text.secondary" gutterBottom>
                   Customized Test Creation:
                </Typography>
                <CardContent>Upload past JEE question papers or sample tests in PDF format and watch as our advanced OCR technology converts them into interactive online tests.</CardContent>
            </Card>
            <Card variant='outlined'>
                <Typography sx={{ fontSize: 18, fontWeight:"bold" }} color="text.secondary" gutterBottom>
                   Interactive Learning Experience:
                </Typography>
                <CardContent>Engage with each question through a dynamic interface that simulates the real JEE testing environment</CardContent>
            </Card>
        </div>        
    </div>
  )
}

export default Desc
