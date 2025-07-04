import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import AboutPage from "@/pages/about-us/about-us";
import routes from "@/utils/breadcrumbs-massive";
export default function Home() {
  return (
    <>
      <Breadcrumbs className="main-container" list={routes.breadList} />
      <AboutPage />
    </>
  );
}
