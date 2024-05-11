import Link from "next/link";
import { DashboardBoxPropsType } from "@/types/MoleculesType";
import { memo } from "react";

const DashboardBox = memo((props: DashboardBoxPropsType) => {
  return (
    <Link
      href={`/dashboard/${props.href}`}
      className="relative px-4 py-2 text-right w-48 h-20 border-2 shadow-md shadow-primary-color border-primary-color rounded-lg"
    >
      <img
        src={props.icon}
        alt="box-icon"
        className="absolute w-16 h-16 object-cover -top-7 -left-6 -rotate-[30deg]"
      />
      <p className="font-semibold text-black text-lg">{props.title}</p>
      <p className="font-semibold text-black text-lg">{props.text}</p>
    </Link>
  );
});

export default DashboardBox;
