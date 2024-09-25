import Header from "./components/organisms/header";
import SuzAssessment from "./components/organisms/SuzAssessment";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <SuzAssessment type="performance" />
      </main>
    </div>
  );
}
