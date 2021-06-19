import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
    { src: "https://links.papareact.com/5me", name: "Sudip Shil", id: "1" },
    { src: "https://links.papareact.com/5me", name: "Debarati Roy", id: "2" },
    { src: "https://links.papareact.com/5me", name: "Arka Chackraboty", id: "3" },
    { src: "https://links.papareact.com/5me", name: "Ankit Banjari", id: "4" },
    { src: "https://links.papareact.com/5me", name: "Pawan Kumar Meena", id: "5" },
    { src: "https://links.papareact.com/5me", name: "Asmita Datta", id: "6" },
    { src: "https://links.papareact.com/5me", name: "Aradita Saha", id: "7" },
    { src: "https://links.papareact.com/5me", name: "Shubham Kumar", id: "8" },
];

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>
            {contacts.map(contact => (
                <Contact key={contact.id} src={contact.src} name={contact.name} />
            ))}
        </div>
    )
}

export default Widgets
