import PatientForm from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container py-20">
        <div className="sub-container max-w-[496px] flex-1">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular flex justify-between xl:mt-20 mt-10 py-12">
            <p className="text-dark-600 justify-items-end xl:text-left">
              © 2024 CarePulse. All rights reserved.
            </p>
            <Link className="text-green-500" href="/?admin=true">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        width={1000}
        height={1000}
        alt="onboarding image"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
