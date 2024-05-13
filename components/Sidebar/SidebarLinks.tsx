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
            ? "bg-tabs-background text-tabs"
            : "bg-icon-background text-icon"
        } icon group-hover:bg-tabs-background group-hover:text-tabs`}
      >
        <Icon size={15} strokeWidth={3} />
      </div>
      {isExpanded && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className={`${
            pathname === link ? "" : "text-muted"
          } whitespace-nowrap font-semibold group-hover:text-inherit`}
        >
          {name}
        </motion.p>
      )}
    </Link>
  );
};

export default SidebarLinks;
