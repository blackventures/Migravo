import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Menu, User } from "lucide-react";
import MobileSidebar from "@/components/mobile-sidebar";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <MobileSidebar />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>

    );
};

export default Navbar;