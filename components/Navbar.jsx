import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import apple from "/public/apple.svg";
import stars from "/public/stars.svg";
import doctors from "/public/doctors.svg";
import cet from "/public/cet.svg";
import school from "/public/school.svg";

export default function Navbar() {
  return (
    <nav className="w-full h-16 px-[80px] flex justify-between items-center flex-wrap ">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image src={logo} width={200} />
        </Link>
      </div>

      <div className="flex justify-evenly gap-10 items-center place-content-center">
        <Link href={"/alimentacion-saludable"}>
          <Image src={apple} width={30} />
        </Link>
        <Link href={"/cosmetica-natural"}>
          <Image src={stars} width={30} />
        </Link>
        <Link href={"/medicos"}>
          <Image src={doctors} width={30} />
        </Link>
        <Link href={"/cet"}>
          <Image src={cet} width={30} />
        </Link>
        <Link href={"/escuelas"}>
          <Image src={school} width={30} />
        </Link>
      </div>
    </nav>
  );
}
