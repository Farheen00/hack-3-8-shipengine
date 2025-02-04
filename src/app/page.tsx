import Companylogo from "./components/CompanyLogo"
import ExploreStyles from "./components/ExploreStyles"
import Hero from "./components/Hero"
import OurProducts from "./components/OurProducts"
import PageFeaturedProducts from "./components/PageFeaturedProducts"

import TopCategory from "./components/TopCategory"

export default function Home() {
  return(
  <main className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
  
    <Hero />
    <Companylogo />
    <PageFeaturedProducts />
    <TopCategory />
    <ExploreStyles />
    <OurProducts/>
    

  
  </main>)
}