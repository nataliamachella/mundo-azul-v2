import Button from "./Button";
import apple from "/public/apple.svg";
import stars from "/public/stars.svg";
import doctors from "/public/doctors.svg";
import cet from "/public/cet.svg";
import school from "/public/school.svg";

export default function Sidebar() {
  return (
    <div className="w-[25%] h-full py-10 flex flex-col gap-5 mt-10">
      <Button
        name="Alimentación Saludable"
        src={apple}
        href={"/alimentacion-saludable"}
      />
      <Button
        name="Cosmética Natural"
        src={stars}
        href={"/cosmetica-natural"}
      />
      <Button name="Médicos" src={doctors} href={"/medicos"} />
      <Button name="CET" src={cet} href={"/cet"} />
      <Button name="Escuelas" src={school} href={"/escuelas"} />
    </div>
  );
}
