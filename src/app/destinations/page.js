import { NavbarDemo } from "../(home)/Components/NavbarDemo";
import DestinationHomeDemo from "../(home)/Components/DestinationHomeDemo";
import DestinationCards from "../(home)/Components/DestinationCards";
import { AnimatedTestimonialsDemo } from "../(home)/Components/AnimatedTestimonialsDemo";

export default function Destinations() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white">
      <NavbarDemo />
      <DestinationHomeDemo />
      <DestinationCards />
      <AnimatedTestimonialsDemo />
    </main>
  );
} 
