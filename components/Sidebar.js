import { useSession } from "next-auth/client";
import SidebarRow from "./SidebarRow";

import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/outline";
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon } from "@heroicons/react/solid";

function Sidebar() {
    const { session, loading } = useSession();

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src={session?.user?.image || `https://links.papareact.com/5me`} title={session?.user?.name || "Aastik Mandil"} />
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}

export default Sidebar
