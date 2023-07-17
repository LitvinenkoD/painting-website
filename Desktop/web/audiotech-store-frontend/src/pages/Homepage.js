
import HomepageHero from "../components/HomepageHero";
import HomepageProductShowcaseGrid from "../components/HomepageProductShowcaseGrid";
import ProductCategoriesGrid from "../components/ProductCategoriesGrid";

export default function Homepage() {
  return (
    <>
      <HomepageHero />
      <ProductCategoriesGrid />
      <HomepageProductShowcaseGrid />
    </>
  )
}
