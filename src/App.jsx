import { useState, useMemo } from 'react'
import { allocations, states } from './data/allocations'
import './App.css'

function StatusBadge({ status }) {
  return (
    <span className={`badge badge-${status}`}>
      {status === 'available' ? 'Available' : 'Gone'}
    </span>
  )
}

function StoreRow({ store }) {
  return (
    <div className="store-row">
      <div className="store-info">
        <span className="store-name">{store.name}</span>
        <span className="store-location">{store.city}, {store.state}</span>
      </div>
      <div className="store-meta">
        <StatusBadge status={store.status} />
        {store.status === 'available' && (
          <span className="quantity">Qty: {store.quantity}</span>
        )}
        <span className="date">{new Date(store.date).toLocaleDateString()}</span>
      </div>
    </div>
  )
}

function BourbonCard({ bourbon }) {
  const [expanded, setExpanded] = useState(false)
  const availableCount = bourbon.stores.filter(s => s.status === 'available').length

  return (
    <div className={`card ${availableCount > 0 ? 'card-available' : 'card-gone'}`}>
      <div className="card-header" onClick={() => setExpanded(e => !e)}>
        <div className="card-title-group">
          <h3 className="card-title">{bourbon.name}</h3>
          <span className="distillery">{bourbon.distillery}</span>
        </div>
        <div className="card-meta">
          <span className="proof">{bourbon.proof}°</span>
          <span className="msrp">${bourbon.msrp}</span>
          <span className="store-count">
            {availableCount}/{bourbon.stores.length} stores
          </span>
          <span className="chevron">{expanded ? '▲' : '▼'}</span>
        </div>
      </div>
      {expanded && (
        <div className="card-body">
          {bourbon.stores.map((store, i) => (
            <StoreRow key={i} store={store} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [search, setSearch] = useState('')
  const [stateFilter, setStateFilter] = useState('')
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  const filtered = useMemo(() => {
    return allocations
      .map(bourbon => {
        const storeMatches = bourbon.stores.filter(s => {
          if (stateFilter && s.state !== stateFilter) return false
          if (showAvailableOnly && s.status !== 'available') return false
          return true
        })
        if (storeMatches.length === 0) return null
        return { ...bourbon, stores: storeMatches }
      })
      .filter(Boolean)
      .filter(bourbon =>
        bourbon.name.toLowerCase().includes(search.toLowerCase()) ||
        bourbon.distillery.toLowerCase().includes(search.toLowerCase())
      )
  }, [search, stateFilter, showAvailableOnly])

  const totalAvailable = filtered.reduce(
    (sum, b) => sum + b.stores.filter(s => s.status === 'available').length,
    0
  )

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">🥃</span>
            <div>
              <h1>Bourbon Allocation Finder</h1>
              <p>Track rare &amp; allocated bourbon at retailers near you</p>
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <span className="stat-value">{filtered.length}</span>
              <span className="stat-label">Bourbons</span>
            </div>
            <div className="stat">
              <span className="stat-value">{totalAvailable}</span>
              <span className="stat-label">Available</span>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="filters">
          <input
            className="search"
            type="text"
            placeholder="Search bourbon or distillery…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            className="select"
            value={stateFilter}
            onChange={e => setStateFilter(e.target.value)}
          >
            <option value="">All States</option>
            {states.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <label className="toggle">
            <input
              type="checkbox"
              checked={showAvailableOnly}
              onChange={e => setShowAvailableOnly(e.target.checked)}
            />
            Available only
          </label>
        </div>

        {filtered.length === 0 ? (
          <div className="empty">No allocations match your filters.</div>
        ) : (
          <div className="list">
            {filtered.map(bourbon => (
              <BourbonCard key={bourbon.id} bourbon={bourbon} />
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Data is community-sourced and updated daily. Last refresh: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  )
}
