'use client'

import React, { useState } from 'react'

const ProofOfConceptBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center flex-1 space-x-2 text-sm">
            <div className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <strong>PROOF OF CONCEPT:</strong>
            </div>
            <span>This is the future of decentralized exchange - powered by BSV Teranode</span>
            <span>•</span>
            <span className="hidden md:inline">CPU of the world's economy</span>
            <span>•</span>
            <a href="/api" className="hover:underline">API</a>
            <span>•</span>
            <a href="/docs" className="hover:underline">Docs</a>
            <span>•</span>
            <a href="https://github.com/bitcoin-corp/bitcoin-exchange" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
          </div>
          
          <button 
            className="ml-4 p-1 hover:bg-white/20 rounded transition-colors"
            onClick={() => setIsVisible(false)}
            aria-label="Close banner"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProofOfConceptBanner