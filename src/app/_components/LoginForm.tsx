"use client";

import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const router = useRouter();

  return (
    <div className={styles.loginform}>
      <label>
        아이디 <input type="text" />
      </label>
      <label>
        비밀번호 <input type="password" />
      </label>
      <button onClick={() => router.back()}>뒤로가기</button>
    </div>
  );
};

export default LoginForm;
