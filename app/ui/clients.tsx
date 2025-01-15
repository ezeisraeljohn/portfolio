import React from "react";
import Image from "next/image";

export default function ClientCard({ logo }: { logo: string }) {
  return (
    <div>
      <Image src={logo} alt="client" width={150} height={150} />
    </div>
  );
}

export function Clients() {
  return (
    <section>
      <h3>CLIENTS</h3>
      <h2>Companies I've Worked With</h2>
      <div>
        <ClientCard logo="/thepart to the logo"></ClientCard>
      </div>
    </section>
  );
}
