import NewCollections from "../components/newCollections/NewCollections"
import NewsLetter from "../components/newsLetter/NewsLetter"
import Offers from "../components/offers/Offers"
import Popular from "../components/popular/Popular"
import Hero from "../components/ShopHero/Hero"

const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
    </div>
  )
}

export default Shop
