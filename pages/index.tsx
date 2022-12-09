import { SideMenu } from "../components/sidemenu";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-screen ">
      <div className="grid grid-cols-[60px_2fr]">
        <SideMenu />
        <div className="border border-black"></div>
      </div>
    </div>
  );
}
