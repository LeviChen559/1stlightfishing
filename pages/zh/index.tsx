import type { NextPage } from 'next'
import HeroContainer from '../../Slot/heroSlot'
import FeatureContainer from '../../Slot/featureSlot'
import Layout from '../../utility/layout/home'

const Home: NextPage = () => {
  return <Layout title='首頁' >

    <>
    <HeroContainer />
    <FeatureContainer/>
    </>

  </Layout>

}

export default Home
