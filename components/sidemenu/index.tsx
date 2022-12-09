import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function SideMenu() {
  const router = useRouter();
  const page = router.query.id;

  return (
    <div>
      <ul className="menu h-screen bg-slate-900 rounded-l-lg relative items-center py-2">
        <li
          className={clsx({
            "border-r-4 border-r-indigo-600": page === "mainpage",
          })}
        >
          <Link href="/mainpage">
            <img
              src="https://s2.svgbox.net/octicons.svg?ic=circle&color=white"
              className="w-5 h-5 "
            />
          </Link>
        </li>
        <li
          className={clsx({
            "border-r-4 border-r-indigo-600": page === "menu",
          })}
        >
          <Link href="/menu">
            <img
              src="https://s2.svgbox.net/hero-solid.svg?ic=menu&color=white"
              className="w-5 h-5"
            />
          </Link>
        </li>
        <li
          className={clsx({
            "border-r-4 border-r-indigo-600": page === "contacts",
          })}
        >
          <Link href="/contacts">
            <img
              src="https://s2.svgbox.net/octicons.svg?ic=person&color=white"
              className="w-5 h-5"
            />
          </Link>
        </li>
        <li
          className={clsx({
            "border-r-4 border-r-indigo-600": page === "archives",
          })}
        >
          <Link href="/archives">
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=newspaper&color=white"
              className="w-5 h-5"
            />
          </Link>
        </li>
        <li
          className={clsx({
            "border-r-4 border-r-indigo-600": page === "map",
          })}
        >
          <Link href="/map">
            <img
              src="https://s2.svgbox.net/materialui.svg?ic=assistant_navigation&color=white"
              className="w-5 h-5"
            />
          </Link>
        </li>

        <li
          className={clsx("mt-auto", {
            "border-r-4 border-r-indigo-600": page === "/messages",
          })}
        >
          <Link href="/messages">
            <img
              src="https://s2.svgbox.net/materialui.svg?ic=message&color=white"
              className="w-5 h-5"
            />
          </Link>
        </li>
        <li>
          <Link href="/auth">
            <img
              src="https://s2.svgbox.net/materialui.svg?ic=exit_to_app&color=white"
              className="w-5 h-5"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
