import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-8 bg-gradient-to-r from-sky-700 to-indigo-700 text-center leading-8 text-white bottom-0">
      Hecho con 🤍 por{" "}
      <Link
        href={"https://github.com/nataliamachella"}
        rel="noopener noreferrer"
        className="font-semibold"
      >
        Natalia Machella
      </Link>
    </div>
  );
}
