import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import * as Sentry from "@sentry/nextjs";
import { getUser } from "@/lib/actions/patient.action";

const Success = async ({
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doc) => doc.name === appointment.primaryPhysician
  );

  const user = await getUser(userId);

  Sentry.metrics.set("user_view_appointment-success", user.name);

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>
        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center text-white">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted
          </h2>
          <p className="text-white">
            We will be in touch shortly to confirm your appointment
          </p>
        </section>

        <section className="request-details">
          <p className="text-white">Request appointment details:</p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              height={100}
              width={100}
              alt="doctor"
              className="size-6 rounded-full"
            />
            <p className="whitespace-nowrap text-white">Dr. {doctor?.name!}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calender"
            />
            <p className="text-14-regular text-white">
              {formatDateTime(appointment.schedule).dateTime}
            </p>
          </div>
        </section>
        <Button variant="outline" className="shad-primary-btn">
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>
        <p className="text-dark-600 justify-items-end xl:text-left">
          © 2024 CarePulse. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Success;
