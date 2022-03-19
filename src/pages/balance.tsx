import { useState } from "react"

import { useWeb3React } from "@web3-react/core"

import ConnectorModal from "@components/ConnectorModal"
import { useSwitchChain } from "@hooks/useWeb3React"

export default function Home() {
  const { isActive, account, chainId } = useWeb3React()

  const [isOpen, setIsOpen] = useState(false)
  const [isOther, showOther] = useState(false)
  const switchChain = useSwitchChain()

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="space-y-4">
          <h1>Connect Wallet</h1>

          <ul>
            <li>Account: {account}</li>
            <li>isActive: {isActive.toString()}</li>
            <li>chainId: {chainId}</li>
          </ul>

          <button className="block" onClick={() => showOther(!isOther)}>
            Show {isOther ? "Test1" : "Test2"}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="block rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Open dialog
          </button>
        </div>
      </div>

      <ConnectorModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        desiredChain={1285}
      />
    </>
  )
}
