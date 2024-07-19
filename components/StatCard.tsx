import clsx from "clsx";
import Image from "next/image";

interface StatCardProps {
  count: number;
  label: string;
  icon: string;
  type: "appointments" | "pending" | "cancelled";
}

const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
  return (
    <div
      className={clsx(
        "flex flex-1 flex-col gap-6 rounded-2xl bg-cover p-6 shadow-lg",
        {
          "bg-appointments": type === "appointments",
          "bg-pending": type === "pending",
          "bg-cancelled": type === "cancelled",
        }
      )}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          width={32}
          height={32}
          alt={label}
          className="size-8 w-fit"
        />
        <h2 className="text-32-bold text-white">{count}</h2>
      </div>
      <p className="text-14-regular text-white">{label}</p>
    </div>
  );
};

export default StatCard;
