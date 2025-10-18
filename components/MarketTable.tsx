'use client'

import React, { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, Star, ExternalLink, Filter } from 'lucide-react'
import './MarketTable.css'

interface MarketData {
  rank: number
  symbol: string
  name: string
  logo?: string
  price: number
  change24h: number
  volume24h: number
  marketCap: number
  liquidity: number
  holders: number
  contracts: number
  category: string
  isSpecial?: boolean
}

interface MarketTableProps {
  onTokenSelect?: (token: MarketData) => void
}

const MarketTable: React.FC<MarketTableProps> = ({ onTokenSelect }) => {
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [sortBy, setSortBy] = useState<keyof MarketData>('marketCap')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [filter, setFilter] = useState<'all' | 'apps' | 'resources' | 'special'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    // Generate market data for $bEX ecosystem
    const generateMarketData = (): MarketData[] => {
      const tokens = [
        // Core/Special tokens
        { symbol: 'BSV', name: 'Bitcoin SV', category: 'Core', basePrice: 51.23, isSpecial: true },
        { symbol: 'bEX', name: 'Bitcoin Exchange', category: 'Core', basePrice: 2.45, isSpecial: true },
        
        // Bitcoin Apps
        { symbol: 'bWriter', name: 'Bitcoin Writer', category: 'Apps', basePrice: 0.42 },
        { symbol: 'bCode', name: 'Bitcoin Code', category: 'Apps', basePrice: 0.38 },
        { symbol: 'bMail', name: 'Bitcoin Email', category: 'Apps', basePrice: 0.24 },
        { symbol: 'bArt', name: 'Bitcoin Art', category: 'Apps', basePrice: 0.67 },
        { symbol: 'bChat', name: 'Bitcoin Chat', category: 'Apps', basePrice: 0.31 },
        { symbol: 'bMusic', name: 'Bitcoin Music', category: 'Apps', basePrice: 0.37 },
        { symbol: 'bVideo', name: 'Bitcoin Video', category: 'Apps', basePrice: 0.52 },
        { symbol: 'bJobs', name: 'Bitcoin Jobs', category: 'Apps', basePrice: 0.28 },
        { symbol: 'bWallet', name: 'Bitcoin Wallet', category: 'Apps', basePrice: 0.55 },
        { symbol: 'bDrive', name: 'Bitcoin Drive', category: 'Apps', basePrice: 0.44 },
        { symbol: 'bCalendar', name: 'Bitcoin Calendar', category: 'Apps', basePrice: 0.19 },
        { symbol: 'bEducation', name: 'Bitcoin Education', category: 'Apps', basePrice: 0.33 },
        { symbol: 'bGames', name: 'Bitcoin Games', category: 'Apps', basePrice: 0.41 },
        { symbol: 'bMaps', name: 'Bitcoin Maps', category: 'Apps', basePrice: 0.29 },
        { symbol: 'bSocial', name: 'Bitcoin Social', category: 'Apps', basePrice: 0.35 },
        { symbol: 'bPhotos', name: 'Bitcoin Photos', category: 'Apps', basePrice: 0.26 },

        // Computational Resources
        { symbol: 'GPU-H100', name: 'NVIDIA H100 Compute', category: 'Resources', basePrice: 0.089 },
        { symbol: 'GPU-RTX4090', name: 'RTX 4090 Gaming', category: 'Resources', basePrice: 0.045 },
        { symbol: 'CPU-XEON', name: 'Xeon Server Cycles', category: 'Resources', basePrice: 0.025 },
        { symbol: 'SSD-NVME', name: 'NVMe Storage Space', category: 'Resources', basePrice: 0.012 },
        { symbol: 'RAM-DDR5', name: 'DDR5 Memory Pool', category: 'Resources', basePrice: 0.018 },
        { symbol: 'NET-10G', name: '10Gbps Bandwidth', category: 'Resources', basePrice: 0.008 },

        // AI Services
        { symbol: 'AI-INFERENCE', name: 'AI Inference Engine', category: 'AI', basePrice: 0.156 },
        { symbol: 'AI-TRAINING', name: 'AI Model Training', category: 'AI', basePrice: 0.234 },
        { symbol: 'AI-RENDER', name: 'AI Image Rendering', category: 'AI', basePrice: 0.089 }
      ];

      return tokens.map((token, index) => {
        // Generate realistic market data
        const priceVariation = (Math.random() - 0.5) * 0.3; // ±15% variation
        const price = token.basePrice * (1 + priceVariation);
        const change24h = (Math.random() - 0.5) * 0.4; // ±20% daily change
        const volume = Math.floor(Math.random() * 5000000) + 100000; // 100K to 5M
        const marketCap = price * (Math.floor(Math.random() * 10000000) + 1000000); // 1M to 10M tokens
        const liquidity = volume * (0.3 + Math.random() * 0.7); // 30-100% of volume
        const holders = Math.floor(Math.random() * 50000) + 1000; // 1K to 50K holders
        const contracts = Math.floor(Math.random() * 500) + 50; // 50 to 500 contracts

        return {
          rank: index + 1,
          symbol: token.symbol,
          name: token.name,
          price,
          change24h: change24h * 100, // Convert to percentage
          volume24h: volume,
          marketCap,
          liquidity,
          holders,
          contracts,
          category: token.category,
          isSpecial: token.isSpecial || false
        };
      });
    };

    const data = generateMarketData();
    setMarketData(data);

    // Update data every 10 seconds
    const interval = setInterval(() => {
      const updatedData = generateMarketData();
      setMarketData(updatedData);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleSort = (column: keyof MarketData) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const filteredAndSortedData = marketData
    .filter(token => {
      if (filter === 'apps') return token.category === 'Apps';
      if (filter === 'resources') return token.category === 'Resources';
      if (filter === 'special') return token.isSpecial;
      return true;
    })
    .filter(token =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aVal = a[sortBy] as number;
      const bVal = b[sortBy] as number;
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    });

  const formatPrice = (price: number): string => {
    if (price >= 1) return `$${price.toFixed(3)}`;
    return `$${price.toFixed(6)}`;
  };

  const formatVolume = (volume: number): string => {
    if (volume >= 1000000) return `$${(volume / 1000000).toFixed(2)}M`;
    if (volume >= 1000) return `$${(volume / 1000).toFixed(1)}K`;
    return `$${volume.toFixed(0)}`;
  };

  const formatMarketCap = (marketCap: number): string => {
    if (marketCap >= 1000000000) return `$${(marketCap / 1000000000).toFixed(2)}B`;
    if (marketCap >= 1000000) return `$${(marketCap / 1000000).toFixed(2)}M`;
    if (marketCap >= 1000) return `$${(marketCap / 1000).toFixed(1)}K`;
    return `$${marketCap.toFixed(0)}`;
  };

  const getChangeColor = (change: number): string => {
    return change >= 0 ? 'text-green-400' : 'text-red-400';
  };

  const getCategoryBadgeColor = (category: string): string => {
    switch (category) {
      case 'Core': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Apps': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Resources': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'AI': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="market-table-container">
      {/* Header and Controls */}
      <div className="market-header">
        <div className="market-title">
          <h2 className="text-3xl font-thin mb-2">$bEX Market Overview</h2>
          <p className="text-gray-400">Real-time data for Bitcoin Apps and computational resources</p>
        </div>

        <div className="market-controls">
          {/* Search */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search tokens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Filter */}
          <div className="filter-container">
            <Filter size={16} />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as typeof filter)}
              className="filter-select"
            >
              <option value="all">All Categories</option>
              <option value="special">Core Tokens</option>
              <option value="apps">Bitcoin Apps</option>
              <option value="resources">Resources</option>
            </select>
          </div>
        </div>
      </div>

      {/* Market Table */}
      <div className="market-table-wrapper">
        <table className="market-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('rank')} className="sortable">
                #
              </th>
              <th>Token</th>
              <th onClick={() => handleSort('price')} className="sortable">
                Price
              </th>
              <th onClick={() => handleSort('change24h')} className="sortable">
                24h %
              </th>
              <th onClick={() => handleSort('volume24h')} className="sortable">
                Volume (24h)
              </th>
              <th onClick={() => handleSort('marketCap')} className="sortable">
                Market Cap
              </th>
              <th onClick={() => handleSort('liquidity')} className="sortable">
                Liquidity
              </th>
              <th onClick={() => handleSort('holders')} className="sortable">
                Holders
              </th>
              <th onClick={() => handleSort('contracts')} className="sortable">
                Contracts
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.map((token) => (
              <tr
                key={token.symbol}
                className={`market-row ${token.isSpecial ? 'special-row' : ''}`}
                onClick={() => onTokenSelect?.(token)}
              >
                <td className="rank-cell">
                  {token.isSpecial && <Star size={12} className="special-star" />}
                  {token.rank}
                </td>
                <td className="token-cell">
                  <div className="token-info">
                    <div className="token-symbol">${token.symbol}</div>
                    <div className="token-name">{token.name}</div>
                    <span className={`category-badge ${getCategoryBadgeColor(token.category)}`}>
                      {token.category}
                    </span>
                  </div>
                </td>
                <td className="price-cell">
                  <span className="price">{formatPrice(token.price)}</span>
                </td>
                <td className={`change-cell ${getChangeColor(token.change24h)}`}>
                  {token.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
                </td>
                <td className="volume-cell">
                  {formatVolume(token.volume24h)}
                </td>
                <td className="marketcap-cell">
                  {formatMarketCap(token.marketCap)}
                </td>
                <td className="liquidity-cell">
                  {formatVolume(token.liquidity)}
                </td>
                <td className="holders-cell">
                  {token.holders.toLocaleString()}
                </td>
                <td className="contracts-cell">
                  {token.contracts}
                </td>
                <td className="actions-cell">
                  <button 
                    className="trade-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTokenSelect?.(token);
                    }}
                  >
                    Trade
                  </button>
                  <button className="info-button">
                    <ExternalLink size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Market Stats Footer */}
      <div className="market-stats">
        <div className="stat-item">
          <span className="stat-label">Total Market Cap:</span>
          <span className="stat-value">{formatMarketCap(filteredAndSortedData.reduce((sum, token) => sum + token.marketCap, 0))}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">24h Volume:</span>
          <span className="stat-value">{formatVolume(filteredAndSortedData.reduce((sum, token) => sum + token.volume24h, 0))}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Active Tokens:</span>
          <span className="stat-value">{filteredAndSortedData.length}</span>
        </div>
      </div>
    </div>
  );
};

export default MarketTable;