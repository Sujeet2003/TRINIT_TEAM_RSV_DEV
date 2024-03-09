import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const CreateTestPage = () => {
  return (
    <>
      <div className='text-center flex-col gap-2'>
        <Typography sx={{m:2}} variant="h4" component="h2"  gutterBottom>
          Welcome to the Test Creation Page
        </Typography>
      </div>
      <Typography sx={{m:2}} variant="h5" component="h2"  gutterBottom>Please enter the title for the test:</Typography>
      <div className='overflow-hidden'>
        <TextField
          sx={{margin:"0px 30px", width: '100%'}}
          id="outlined-basic"
          color='secondary'
          label="Test Title"
          fullWidth
          variant="filled" />
      </div>
    </>
  )
}

export default CreateTestPage
