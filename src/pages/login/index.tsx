import LoginPage from "@/components/Templates/LoginPage";
import { memo } from "react";

const login = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <LoginPage />
    </section>
  );
});

export default login;
