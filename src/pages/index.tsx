/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from "react";

import ConnectorModal from "@components/ConnectorModal";
import { useWeb3React } from "@web3-react/core";
import { Header } from "@components/Header";
import Link from "next/link";


export default function Example() {
  const { isActive, account } = useWeb3React()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Header />
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Fairy Mint
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Image</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Decription 1 </dd>
              </div>
              <div className="relative">
                <dt>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    <Link href="/createRaffle">
                      <button
                        className="px-6 py-2 text-sm rounded shadow bg-emerald-100 hover:bg-emerald-200 text-emerald-500">Create Raffle
                      </button>
                    </Link>

                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Description 2 </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <ConnectorModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        desiredChain={1}
      />
    </div>
  )
}
