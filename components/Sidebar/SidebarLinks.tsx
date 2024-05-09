import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type SidebarLinksProps = {
  name: string;
  slug: string;
  icon: LucideIcon;
  isExpanded: boolean;
};

const SidebarLinks = ({ name, slug, icon, isExpanded }: SidebarLinksProps) => {
  const link = slug.split("/")[1];
  const Icon = icon;
  const pathname = usePathname().split("/")[1];
  return (
    <Link href={slug} className="group flex items-center space-x-2">
      <div
        className={`${
          pathname === link
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-600"
        } icon rounded-xl group-hover:bg-gray-900 group-hover:text-white`}
      >
        <Icon size={15} strokeWidth={3} />
      </div>
      {isExpanded && (
        <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:"easeInOut", duration:0.8}}
          className={`${
            pathname === link ? "" : "text-gray-600"
          } whitespace-nowrap font-semibold group-hover:text-zinc-900`}
        >
          {name}
        </motion.p>
      )}
    </Link>
  );
};

export default SidebarLinks;
