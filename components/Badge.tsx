import { LucideIcon } from "lucide-react";
import React from "react";

type BadgeProps = {
  text: string;
  Icon?: LucideIcon;
  iconFill?: string;
};

const Badge = ({ text, Icon, iconFill }: BadgeProps) => {
  return (
    <div className="w-fit px-2 py-[1px] flex items-center bg-gray-900/[.35] backdrop-blur-lg backdrop-saturate-[180%] rounded-3xl">
      <span className="text-[10px] text-white font-semibold">{text}&nbsp;</span>
      {Icon && <Icon fill={iconFill} size={10} style={{ color: iconFill }} />}
    </div>
  );
};

export default Badge;
