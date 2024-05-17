import EnterCodePage from "@/components/Templates/EnterCodePage";
import { memo } from "react";

const EnterCode = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <EnterCodePage title="forget password" />
    </section>
  );
});

export default EnterCode;
