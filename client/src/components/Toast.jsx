import Alert from '@mui/material/Alert';

const Toast = ({children}) => {
  return (
    <div className='absolute'>
      <Alert severity="info">{children}</Alert>
    </div>
  )
}

export default Toast
