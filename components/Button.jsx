import Link from "next/link";
import Image from "next/image";

export default function Button({ name, src, href }) {
  return (
    <div className="h-[70px] w-[70%] p-2 hover:bg-[--color-primary] rounded-md">
      <Link href={href} className=" inline-flex items-center justify-evenly">
        <Image src={src} className=" bg-white rounded-full p-2" />
        <h6 className="ml-3 text-slate-200 ">{name}</h6>
      </Link>
    </div>
  );
}
