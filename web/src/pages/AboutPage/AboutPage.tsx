import { MetaTags } from '@redwoodjs/web'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <AppLayout>
        This is the about page.
      </AppLayout>
    </>
  )
}

export default AboutPage
