import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Sentry from "@sentry/nextjs";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  Sentry.metrics.set("user_view_new-appointment", patient.name);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[824px] flex-1 flex-col py-20">
          <Link href={"/"}>
            <Image
              src="/assets/icons/logo-full.svg"
              width={1000}
              height={1000}
              alt="logo"
              className="mb-12 h-10 w-fit"
            />
          </Link>
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />
          <p className="text-14-regular justify-items-end text-center text-dark-600 xl:text-left py-12">
            © 2024 CarePulse. All rights reserved.
          </p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        width={1000}
        height={1000}
        alt="onboarding image"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default NewAppointment;
