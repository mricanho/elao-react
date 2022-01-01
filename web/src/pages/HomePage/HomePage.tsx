
import { MetaTags } from '@redwoodjs/web'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <AppLayout>
        This is the homepage.
      </AppLayout>

    </>
  )
}

export default HomePage
