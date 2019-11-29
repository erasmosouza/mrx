import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function LoginHeader() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>

    </div>
  )
}
