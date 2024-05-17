import EnterCodePage from "@/components/Templates/EnterCodePage";
import { memo } from "react";

const EnterCode = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <EnterCodePage title="Sign In / Sign Up" />
    </section>
  );
});

export default EnterCode;
