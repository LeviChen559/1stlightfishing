import type { NextPage } from 'next'
import HeroContainer from '../../component/heroContainer'
import FeatureContainer from '../../component/featureContainer'
import Layout from '../../utility/layout/home'
import MasonryContainer from '../../component/masonryContainer'
import Service from '../../component/service'
const Home: NextPage = () => {
  return <Layout>

    <>
    <HeroContainer />
    <FeatureContainer/>
    <Service/>
        <MasonryContainer/>

    </>

  </Layout>

}

export default Home
