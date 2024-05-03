import Home from "@/components/business/home";
import Sidebar from "@/components/ui/sidebar";

const loggedIn = {
  firstName: "Yanji",
  lastName: "Haha",
}

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar user={loggedIn} />
      <Home className="container" />
    </div>
  );
}
