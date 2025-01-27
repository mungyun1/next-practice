import LoginForm from "@/app/_components/LoginForm";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
