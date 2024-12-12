import Image from "next/image";
import Link from "next/link";

import logoImg from "@/public/images/logo.png";

import styles from "@/components/main-header/main-header.module.css";

const menuData = [
  {
    id: "menu-1",
    name: "Browse Meals",
    href: "/meals",
  },
  {
    id: "menu-2",
    name: "Join Community",
    href: "/community",
  },
];

export default function Nav() {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logo}>
        <Image src={logoImg} alt="logo image" priority width={64} height={64} />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          {menuData.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.href}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
