import MentorRegForm from "@/components/forms/mentorRegForm";
import React from "react";
import Image from "next/image";
const Register = () => {
  return (
    <main className="grid h-screen w-full grid-cols-2">
      <main className="w-full fixed relative h-full bg-black">
        <div className="bg-black/50 absolute flex items-center justify-center top-0 w-full h-full z-[999999]">
          <Image src={"/images/logo.svg"} width={250} height={105} />
        </div>
        <Image
          src="/images/side.png"
          layout="fill"
          objectFit="cover"
          style={{ objectFit: "cover" }}
        />
      </main>
      <main className="w-full max-h-screen overflow-y-scroll bg-white px-4 py-4">
        {<MentorRegForm />}
      </main>
    </main>
  );
};

export default Register;