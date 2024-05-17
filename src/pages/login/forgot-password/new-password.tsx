import NewPasswordPage from "@/components/Templates/NewPasswordPage";
import { memo } from "react";

const NewPassword = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <NewPasswordPage />
    </section>
  );
});

export default NewPassword;
