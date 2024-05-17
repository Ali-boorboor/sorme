import SignupPage from "@/components/Templates/SignupPage";
import { memo } from "react";

const signup = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SignupPage />
    </section>
  );
});

export default signup;
