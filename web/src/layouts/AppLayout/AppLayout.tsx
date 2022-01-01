import { Link, routes } from '@redwoodjs/router'
type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
      </h1>
      <nav>
        <li>
          <Link to={routes.about()}>About Page</Link>
        </li>
      </nav>
    <main>{children}</main>
    </>
  )
}

export default AppLayout
