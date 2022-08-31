import type { NextPage } from 'next'
import HeroContainer from '../../component/heroSlot'
import FeatureContainer from '../../component/featureSlot'
import Layout from '../../utility/layout/home'

const Home: NextPage = () => {
  return <Layout>

    <>
    <div>zh</div>
    <HeroContainer />
    <FeatureContainer/>
    </>

  </Layout>

}

export default Home
