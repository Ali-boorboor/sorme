import ForgotPasswordPage from "@/components/Templates/ForgotPasswordPage";
import { memo } from "react";

const ForgotPassword = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <ForgotPasswordPage />
    </section>
  );
});

export default ForgotPassword;
