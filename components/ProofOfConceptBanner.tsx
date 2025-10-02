'use client'

import React from 'react'
import { AlertTriangle } from 'lucide-react'
import './ProofOfConceptBanner.css'

const ProofOfConceptBanner: React.FC = () => {
  return (
    <div className="poc-bar">
      <div className="poc-content">
        <AlertTriangle className="poc-icon" size={16} />
        <span className="poc-text">PROOF OF CONCEPT - Bitcoin Exchange: The CPU of the World's Economy</span>
        <AlertTriangle className="poc-icon" size={16} />
      </div>
    </div>
  )
}

export default ProofOfConceptBanner