import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

export function MainMenu({mainMenu, articlesMenu}){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-black">
            <nav aria-label="Global" className="flex max-w-full items-center justify-between p-2 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-4xl"
                    >
                        Curabitur
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">

                    {mainMenu.map((item) => (
                        <Link
                            key={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-white"
                        >
                            {item.title}
                        </Link>
                    ))}

                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6">
                            Articles
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-96 top-6 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {articlesMenu.map((item) => (
                                    <div
                                        key={item.title}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-blue-950"
                                    >

                                        <div className="flex-auto">
                                            <Link
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="block font-semibold text-white"
                                            >
                                                {item.title}
                                                <span className="absolute inset-0" />
                                            </Link>

                                        </div>
                                    </div>
                                ))}
                            </div>

                        </PopoverPanel>
                    </Popover>

                </PopoverGroup>

            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-4xl"
                        >
                            Curabitur
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                {mainMenu.map((item) => (
                                    <Link
                                        onClick={() => setMobileMenuOpen(false)}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-950"
                                    >
                                        {item.title}
                                    </Link>
                                ))}

                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-950">
                                        Articles
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...articlesMenu].map((item) => (
                                            <DisclosureButton
                                                key={item.title}
                                                as="a"
                                                onClick={() => setMobileMenuOpen(false)}
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-950"
                                            >
                                                {item.title}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
