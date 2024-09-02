import styles from "./home-page.module.scss";
import Mv from "../_components/pages/home/mv/mv";
import Business from "../_components/pages/home/business/business";
import About from "../_components/pages/home/about/about";
import Service from "../_components/pages/home/service/service";
import Contact from "../_components/pages/home/contact/contact";
import { TOP_METADATA } from "../_data/metadata";
import { outputMetadata } from "../_utils/outputMetadata";

export const metadata = outputMetadata(null, TOP_METADATA.description, TOP_METADATA.slug);

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Mv />
      <Business />
      <Service />
      <About />
      <Contact />
    </main>
  );
}
