import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownRegister() {
  return (
    <Menu as="div" className="relative inline-block  ">
      <div>
        <Menu.Button className="inline-flex w-full gap-x-1.5 rounded-md px-3 py-2 text-20 font-medium text-white text-sm font-fontTH  shadow-sm">
          สนใจสมัครเรียน
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  วิธีการสมัคร
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  ทีมที่ปรึกษา
                </a>
              )}
            </Menu.Item>

            <form method="POST" action="#"></form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Dropdown() {
//   return (
//     <Menu as="div" className="relative text-left">
//       <div>
//         <Menu.Button className="inline-flex  justify-center gap-x-1.5 rounded-md bg-[#1F306A] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1F306A]">
//         สนใจสมัครเรียน
//           <ChevronDownIcon
//             className="-mr-1 h-5 w-5 text-white"
//             aria-hidden="true"
//           />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#1F306A] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="สมัคร"
//                   className={classNames(
//                     active ? " bg-[#1F306A] text-gray-900 " : "text-white",
//                     "block px-4 py-2 text-sm"
//                   )}
//                 >
//                   วิธีการสมัคร
//                 </a>
//               )}
//             </Menu.Item>
//           </div>
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? "bg-[#1F306A] text-gray-900" : "text-white",
//                     "block px-4 py-2 text-sm"
//                   )}
//                 >
//                   ทีมที่ปรึกษา
//                 </a>
//               )}
//             </Menu.Item>
//           </div>

//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }
