import React from "react";
import LoginForm from "../_components/LoginForm";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.main}>
      <LoginForm />
    </div>
  );
};

export default page;
