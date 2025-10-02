import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h4 className="font-light text-xl mb-4">
              Bitcoin <span className="text-green-500">Exchange</span>
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              An exchange of exchanges. The user interface for the blockchain itself - 
              a window into the mempool and the firehose of tokenized data.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span>Powered by</span>
              <span className="text-green-500">BSV Teranode</span>
            </div>
          </div>

          {/* Markets */}
          <div>
            <h4 className="font-normal mb-4">Markets</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/exchange" className="hover:text-green-500 transition-colors">Spot Trading</a></li>
              <li><a href="/exchange" className="hover:text-green-500 transition-colors">Compute Markets</a></li>
              <li><a href="/exchange" className="hover:text-green-500 transition-colors">AI Services</a></li>
              <li><a href="/exchange" className="hover:text-green-500 transition-colors">Storage Trading</a></li>
            </ul>
          </div>

          {/* Token */}
          <div>
            <h4 className="font-normal mb-4">$bEX Token</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/token" className="hover:text-green-500 transition-colors">Token Overview</a></li>
              <li><a href="/token#liquidity" className="hover:text-green-500 transition-colors">Provide Liquidity</a></li>
              <li><a href="/token#indexing" className="hover:text-green-500 transition-colors">Run Indexer Node</a></li>
              <li><a href="/token#stats" className="hover:text-green-500 transition-colors">Statistics</a></li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="font-normal mb-4">Developers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://docs.bitcoin-exchange.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">API Docs</a></li>
              <li><a href="https://github.com/bitcoin-exchange" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">GitHub</a></li>
              <li><a href="/exchange#advanced" className="hover:text-green-500 transition-colors">Trading Bots</a></li>
              <li><a href="/exchange#data" className="hover:text-green-500 transition-colors">Market Data</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <div>© 2025 The Bitcoin Corporation LTD</div>
              <div className="text-xs text-gray-500 mt-1">
                Company No. 16735102 • Registered in England & Wales
              </div>
              <div className="text-xs text-gray-500">
                Registered Office: 27 Old Gloucester Street, London, WC1N 3AX
              </div>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/terms" className="hover:text-green-500 transition-colors">Terms</a>
              <a href="/privacy" className="hover:text-green-500 transition-colors">Privacy</a>
              <span className="text-gray-600">|</span>
              <span className="text-green-500">Open BSV License v5</span>
            </div>
          </div>
        </div>

        {/* Exchange Stats Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Network Status: <span className="text-green-500">Operational</span></span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Block Height:</span>
              <span className="font-mono text-gray-400">823,451</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Mempool Size:</span>
              <span className="font-mono text-gray-400">1.2 GB</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Active Nodes:</span>
              <span className="font-mono text-gray-400">2,847</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>TPS:</span>
              <span className="font-mono text-green-500">1.2M</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer