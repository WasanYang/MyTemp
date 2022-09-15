import Link from "next/link";
import { MouseEventHandler } from "react";

interface linkProp {
    label: string;
    href: string;
    onClick?: MouseEventHandler | null
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    active?: boolean;
}
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function LinkText({ label, href, onClick, startIcon, endIcon, active, ...props }: linkProp) {
    return <>
        <Link href={href}         >
            <a className={classNames(active ? 'bg-gray-200' : 'hover:bg-gray-200 bg-gray-100 ',
            'text-gray-900 flex items-center p-2 text-base font-normal rounded-lg dark:text-white  dark:hover:bg-gray-700')}>
            <span className="w-6">
                {startIcon}
            </span>
            <span className="block px-3 py-2 rounded-md text-base font-medium">{label}</span>
            {endIcon}
            </a>
        </Link>
    </>
}