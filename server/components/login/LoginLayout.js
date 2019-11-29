import LoginHeader from './LoginHeader'
import LoginFooter from './LoginFooter'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function LoginLayout(props) {
  return (
    <div style={layoutStyle}>
      <LoginHeader />
      {props.children}
      <LoginFooter />
    </div>
  )
}
