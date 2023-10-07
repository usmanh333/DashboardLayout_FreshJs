import LogoutSVG from "./LogoutSVG.tsx";
import CartSVG from "./CartSVG.tsx";

export default function Navbar() {
  return (
    <div className="navbar bg-dots fade-b">
      <div className="flex-1">
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <nav class="pointer-events-auto hidden md:inline-flex ml-4 bg-[#242427]
           items-center px-4 h-11 text-sm rounded-full font-medium ring-1 ring-inset
            ring-gray-500/30 shadow-[0_14px_45px_14px_rgba(0,0,0,0.3)] shadow-gray/20">
            <a
              href=""
              style="--highlight-color:rgb(14 165 233)"
              class="px-3 lg:px-2.5 py-3 relative transition duration-500 focus:text-highlight ring-inset text-gray-300"

            >
              <CartSVG />
            </a>
            <a
              href=""
              style="--highlight-color:rgb(255 255 255)"
              class="px-3 lg:px-2.5 py-3 relative transition duration-500 focus:text-highlight ring-inset text-gray-300"
            >
              <LogoutSVG />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
