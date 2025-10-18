import React, { useState, useEffect } from 'react';
import './TickerSidebar.css';

interface TokenPrice {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  changePercent: number;
  volume24h: number;
  liquidity?: number;
  holders?: number;
  category?: string;
  isSpecial?: boolean;
  contractId?: string;
}

interface TickerSidebarProps {
  currentApp?: string;
}

const TickerSidebar: React.FC<TickerSidebarProps> = ({ currentApp }) => {
  const [prices, setPrices] = useState<TokenPrice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    // Generate $bEX App tokens
    const generateBEXTokens = (): TokenPrice[] => {
      const bexApps = [
        { symbol: 'BSV', name: 'Bitcoin SV', category: 'Core', basePrice: 51.23, volatility: 0.3, isSpecial: true },
        { symbol: 'bEX', name: 'Bitcoin Exchange', category: 'Core', basePrice: 2.45, volatility: 0.4, isSpecial: true },
        { symbol: 'bWriter', name: 'Bitcoin Writer', category: 'Apps', basePrice: 0.42, volatility: 0.35 },
        { symbol: 'bCode', name: 'Bitcoin Code', category: 'Apps', basePrice: 0.38, volatility: 0.3 },
        { symbol: 'bMail', name: 'Bitcoin Email', category: 'Apps', basePrice: 0.24, volatility: 0.25 },
        { symbol: 'bArt', name: 'Bitcoin Art', category: 'Apps', basePrice: 0.67, volatility: 0.4 },
        { symbol: 'bChat', name: 'Bitcoin Chat', category: 'Apps', basePrice: 0.31, volatility: 0.28 },
        { symbol: 'bMusic', name: 'Bitcoin Music', category: 'Apps', basePrice: 0.37, volatility: 0.32 },
        { symbol: 'bVideo', name: 'Bitcoin Video', category: 'Apps', basePrice: 0.52, volatility: 0.35 },
        { symbol: 'bJobs', name: 'Bitcoin Jobs', category: 'Apps', basePrice: 0.28, volatility: 0.3 },
        { symbol: 'bWallet', name: 'Bitcoin Wallet', category: 'Apps', basePrice: 0.55, volatility: 0.33 },
        { symbol: 'bDrive', name: 'Bitcoin Drive', category: 'Apps', basePrice: 0.44, volatility: 0.29 },
        { symbol: 'bCalendar', name: 'Bitcoin Calendar', category: 'Apps', basePrice: 0.19, volatility: 0.22 },
        { symbol: 'bEducation', name: 'Bitcoin Education', category: 'Apps', basePrice: 0.33, volatility: 0.27 },
        { symbol: 'bGames', name: 'Bitcoin Games', category: 'Apps', basePrice: 0.41, volatility: 0.36 },
        { symbol: 'bMaps', name: 'Bitcoin Maps', category: 'Apps', basePrice: 0.29, volatility: 0.24 }
      ];

      // Generate tokens with market dynamics
      const tokensWithData = bexApps.map((token, index) => {
        const contractNum = Math.floor(Math.random() * 9000) + 1000;
        const contractId = token.isSpecial ? undefined : `bex_${contractNum}`;
        
        // Simulate market dynamics
        const liquidityMultiplier = Math.random() * 2 + 0.5;
        const basePrice = token.basePrice;
        const change = (Math.random() - 0.5) * basePrice * token.volatility;
        const volume = Math.floor(Math.random() * 200000 * liquidityMultiplier) + 10000;
        const liquidity = Math.floor(volume * 0.7);
        const holders = Math.floor(liquidity / 150 + Math.random() * 200);
        
        return {
          symbol: token.symbol,
          name: token.name,
          category: token.category,
          contractId: contractId,
          price: basePrice,
          change24h: change,
          changePercent: (change / basePrice) * 100,
          volume24h: volume,
          liquidity: liquidity,
          holders: holders,
          isSpecial: token.isSpecial || false
        };
      });

      // Sort: Special tokens first, then by volume
      return tokensWithData.sort((a, b) => {
        if (a.isSpecial && !b.isSpecial) return -1;
        if (!a.isSpecial && b.isSpecial) return 1;
        return (b.volume24h || 0) - (a.volume24h || 0);
      });
    };

    // Initialize with $bEX tokens
    const bexTokens = generateBEXTokens();
    setPrices(bexTokens);
    setLastUpdate(new Date());
    setIsLoading(false);

    // Update prices every 30 seconds
    const updateInterval = setInterval(() => {
      const updatedTokens = generateBEXTokens();
      setPrices(updatedTokens);
      setLastUpdate(new Date());
    }, 30000);

    return () => {
      clearInterval(updateInterval);
    };
  }, [currentApp]);

  const formatPrice = (price: number): string => {
    if (price >= 1000) {
      return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else if (price >= 1) {
      return `$${price.toFixed(2)}`;
    } else if (price >= 0.01) {
      return `$${price.toFixed(4)}`;
    } else {
      return `$${price.toFixed(6)}`;
    }
  };

  const formatVolume = (volume: number): string => {
    if (volume >= 1000000) {
      return `$${(volume / 1000000).toFixed(1)}M`;
    } else if (volume >= 1000) {
      return `$${(volume / 1000).toFixed(1)}K`;
    }
    return `$${volume.toFixed(0)}`;
  };

  const formatLiquidity = (liquidity?: number): string => {
    if (!liquidity) return 'Low';
    if (liquidity >= 100000) return 'Very High';
    if (liquidity >= 50000) return 'High';
    if (liquidity >= 10000) return 'Medium';
    if (liquidity >= 5000) return 'Fair';
    return 'Low';
  };

  const getLiquidityColor = (liquidity?: number): string => {
    if (!liquidity) return '#666';
    if (liquidity >= 100000) return '#4CAF50';
    if (liquidity >= 50000) return '#8BC34A';
    if (liquidity >= 10000) return '#FFC107';
    if (liquidity >= 5000) return '#FF9800';
    return '#f44336';
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit' 
    });
  };

  return (
    <div className={`ticker-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="ticker-header">
        <h3>$bEX Market</h3>
        <div className="ticker-header-controls">
          <button 
            className="ticker-toggle"
            onClick={() => {
              const newCollapsed = !isCollapsed;
              setIsCollapsed(newCollapsed);
              // Emit event for desktop icons to listen to
              window.dispatchEvent(new CustomEvent('tickerToggled', { detail: newCollapsed }));
            }}
            title={isCollapsed ? 'Expand ticker' : 'Collapse ticker'}
          >
            {isCollapsed ? '←' : '→'}
          </button>
        </div>
      </div>

      {!isCollapsed && (
        <>
          {isLoading ? (
            <div className="ticker-loading">Loading $bEX prices...</div>
          ) : (
            <div className="ticker-list">
              {prices.map((token, index) => {
                // Add divider after last special token
                const showDivider = token.isSpecial && 
                  index < prices.length - 1 && 
                  !prices[index + 1].isSpecial;
                
                return (
                  <React.Fragment key={token.symbol}>
                    <div className={`ticker-item ${token.isSpecial ? 'special' : ''}`}>
                      <div className="ticker-symbol-row">
                        <span className="ticker-symbol">${token.symbol}</span>
                        <span className={`ticker-change ${token.change24h >= 0 ? 'positive' : 'negative'}`}>
                          {token.change24h >= 0 ? '↑' : '↓'} {Math.abs(token.changePercent).toFixed(2)}%
                        </span>
                      </div>
                      
                      <div className="ticker-name">
                        {token.name}
                        {token.category && (
                          <span className="ticker-category"> • {token.category}</span>
                        )}
                      </div>
                      
                      <div className="ticker-price-row">
                        <span className="ticker-price">{formatPrice(token.price)}</span>
                        {token.contractId && (
                          <span className="ticker-contract-id">#{token.contractId}</span>
                        )}
                      </div>
                      
                      <div className="ticker-stats">
                        <span className="ticker-volume">
                          Vol: {formatVolume(token.volume24h)}
                        </span>
                        {token.liquidity !== undefined && (
                          <span 
                            className="ticker-liquidity"
                            style={{ color: getLiquidityColor(token.liquidity) }}
                          >
                            {formatLiquidity(token.liquidity)}
                          </span>
                        )}
                        {token.holders !== undefined && (
                          <span className="ticker-holders">
                            {token.holders} holders
                          </span>
                        )}
                      </div>
                    </div>
                    {showDivider && (
                      <div className="ticker-divider">
                        <span>Bitcoin Apps</span>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}

          <div className="ticker-footer">
            <div className="ticker-disclaimer">
              Last update: {formatTime(lastUpdate)}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TickerSidebar;