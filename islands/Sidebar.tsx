import DashboardIcon from "../components/DashboardIcon.tsx";
import { h } from "preact";
// import { ACTIVE_LINK_STYLES } from "@/utils/constants.ts";

export default function sidebar() {
  return (
    <div className="flex flex-col  bodybg w-52  fixed overflow-hidden">
      <div className="flex item-center gap-2 px-1 py-9    ">
        <span className="flex items-center text-xl  dark:text-neutral-100 text-white  text-lg">
          <div className="px-3">
            <DashboardIcon />
          </div>SiteName
        </span>
      </div>
      <div className="flex-1  ">
        <ul className="menu p-4 w-40 min-h-full bodybg text-base-content ">
          {/* Sidebar content here */}
          <li>
            <a href="">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/">Order</a>
          </li>
          <li>
            <a href="/">Messages</a>
          </li>
          <li>
            <a href="/product">
              Products
            </a>
          </li>
          <li>
            <a href="/">User</a>
          </li>
          <li>
            <a href="/">Widhrawals</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
          <li>
            <a href="/">Store</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
