import Typography from '@material-ui/core/Typography';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LoginLayout from '../components/login/LoginLayout'

export default function Index() {
    return (
        <LoginLayout>
            <HomeWorkIcon color="primary" />
            <Typography variant="subtitle1">Hello Next.js</Typography>
        </LoginLayout>
    )
  }
  