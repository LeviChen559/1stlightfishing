import type { NextPage } from 'next'
import HeroContainer from '../../component/heroContainer'
import FeatureContainer from '../../component/featureContainer'
import Layout from '../../utility/layout/home'

const Home: NextPage = () => {
  return <Layout>

    <>
    <HeroContainer />
    <FeatureContainer/>
    </>

  </Layout>

}

export default Home
