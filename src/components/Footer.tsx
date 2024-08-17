import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <Image src="/icons/logo.svg" alt="Logo" width={50} height={50} />
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com">
            <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://youtube.com">
            <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
          </a>
          <a href="https://facebook.com">
            <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
        </div>
      </nav>
    </footer>
  );
}
