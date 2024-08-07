import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center mt-5">
      <div className="relative w-28 h-28">
        <Image fill alt="Logo " src={"/logo.png"} />
      </div>
    </div>
  );
}
