import React, { useState } from 'react';
import { X, Check, RefreshCw } from 'lucide-react';

export default function InteractiveSimModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('clustering');
  
  // Seat Clustering state
  const [groupSize, setGroupSize] = useState(4);
  const [clusteredSeats, setClusteredSeats] = useState(['14A', '14B', '14C', '14D']);
  const [isClustering, setIsClustering] = useState(false);

  // Security Freeze state
  const [securityStatus, setSecurityStatus] = useState('normal'); // 'normal' | 'alert' | 'frozen'

  // Proxmox rollback state
  const [snapshotState, setSnapshotState] = useState('ready'); // 'ready' | 'restoring' | 'complete'

  if (!isOpen) return null;

  const runCluster = (size) => {
    setIsClustering(true);
    setGroupSize(size);
    setTimeout(() => {
      const rows = ['12', '14', '18', '21'];
      const row = rows[Math.floor(Math.random() * rows.length)];
      const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
      const seats = [];
      for (let i = 0; i < size; i++) {
        seats.push(`${row}${letters[i]}`);
      }
      setClusteredSeats(seats);
      setIsClustering(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-xl">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              SmartAir SriLanka — Interactive System Preview
            </h3>
            <p className="text-xs text-slate-500">
              Interactive demonstration of core airport management algorithms
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="p-4 bg-[#f7f8fa] border-b border-slate-200 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('clustering')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              activeTab === 'clustering'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            One-Tap Group Seat Clustering
          </button>
          <button
            onClick={() => setActiveTab('routing')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              activeTab === 'routing'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Dynamic Queue Gate Routing
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              activeTab === 'security'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Watchlist Sync & Baggage Hold
          </button>
          <button
            onClick={() => setActiveTab('rollback')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              activeTab === 'rollback'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            10s Proxmox Rollback
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          
          {/* Tab 1: Group Seat Clustering */}
          {activeTab === 'clustering' && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    One-Tap Adjacent Seating Algorithm
                  </h4>
                  <p className="text-xs text-slate-500">
                    Select a travel group size to view automatic adjacent seat allocation
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-medium">Passengers:</span>
                  {[2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => runCluster(num)}
                      className={`w-7 h-7 rounded-lg text-xs font-semibold transition-colors ${
                        groupSize === num
                          ? 'bg-[#00aaff] text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Aircraft Cabin Diagram */}
              <div className="p-6 bg-[#f7f8fa] rounded-2xl border border-slate-200/80">
                <div className="text-center text-xs font-medium text-slate-500 mb-4">
                  Colombo (CMB) → London (LHR) • Boeing 787 Economy
                </div>

                <div className="max-w-xs mx-auto space-y-2">
                  {['12', '14', '18'].map((row) => (
                    <div key={row} className="flex items-center justify-center gap-1.5">
                      <span className="w-6 text-[11px] font-mono text-slate-400 text-center">{row}</span>
                      {['A', 'B', 'C'].map((col) => {
                        const id = `${row}${col}`;
                        const isPicked = clusteredSeats.includes(id);
                        return (
                          <div
                            key={id}
                            className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-mono font-semibold transition-colors ${
                              isPicked
                                ? 'bg-[#00aaff] text-white'
                                : 'bg-white text-slate-600 border border-slate-200'
                            }`}
                          >
                            {id}
                          </div>
                        );
                      })}
                      <div className="w-3"></div>
                      {['D', 'E', 'F'].map((col) => {
                        const id = `${row}${col}`;
                        const isPicked = clusteredSeats.includes(id);
                        return (
                          <div
                            key={id}
                            className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-mono font-semibold transition-colors ${
                              isPicked
                                ? 'bg-[#00aaff] text-white'
                                : 'bg-white text-slate-600 border border-slate-200'
                            }`}
                          >
                            {id}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <span>
                  Allocated: <strong className="text-slate-900">{clusteredSeats.join(', ')}</strong> ({groupSize} adjacent seats)
                </span>
                <button
                  onClick={() => runCluster(groupSize)}
                  disabled={isClustering}
                  className="px-4 py-1.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
                >
                  Regenerate
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Queue-Aware Routing */}
          {activeTab === 'routing' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Dynamic Security Checkpoint Balancing
                </h4>
                <p className="text-xs text-slate-500">
                  Kiosk evaluates terminal checkpoint congestion to guide passenger to the fastest gate
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-[#f7f8fa] rounded-2xl border border-slate-200">
                  <div className="text-xs font-semibold text-slate-500 mb-1">Security Gate A (Main Hall)</div>
                  <div className="text-2xl font-bold text-slate-800">18 min <span className="text-xs font-normal text-slate-500">wait</span></div>
                  <p className="text-xs text-slate-500 mt-2">Queue depth: 42 passengers</p>
                </div>

                <div className="p-5 bg-white rounded-2xl border-2 border-slate-900 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-900 mb-1">
                    <span>Security Gate B04 (North Concourse)</span>
                    <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded-full font-bold">OPTIMAL</span>
                  </div>
                  <div className="text-2xl font-bold text-[#00aaff]">3 min <span className="text-xs font-normal text-slate-500">wait</span></div>
                  <p className="text-xs text-slate-600 mt-2">Queue depth: 8 passengers</p>
                </div>
              </div>

              <div className="p-4 bg-[#f7f8fa] rounded-xl border border-slate-200 text-xs text-slate-700">
                <strong>Boarding Pass Guidance:</strong> "Recommended: Proceed directly via Security Checkpoint B04. Estimated saving: 15 minutes."
              </div>
            </div>
          )}

          {/* Tab 3: Security & Baggage Hold */}
          {activeTab === 'security' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Watchlist Notice & Baggage Reconciliation (PPBM)
                </h4>
                <p className="text-xs text-slate-500">
                  One-click operational response coordinating gate turnstiles and ramp cargo crew
                </p>
              </div>

              {securityStatus === 'normal' && (
                <div className="p-6 bg-[#f7f8fa] rounded-2xl border border-slate-200 text-center space-y-3">
                  <p className="text-xs text-slate-600">
                    Terminal surveillance is active. Click below to simulate an operations notice.
                  </p>
                  <button
                    onClick={() => setSecurityStatus('alert')}
                    className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl"
                  >
                    Simulate Watchlist Alert
                  </button>
                </div>
              )}

              {securityStatus === 'alert' && (
                <div className="p-5 bg-white rounded-2xl border border-slate-300 shadow-2xs space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-rose-600 uppercase">Security Match Notice</span>
                      <h5 className="text-sm font-bold text-slate-900 mt-0.5">Flagged Passenger #LK-889</h5>
                      <p className="text-xs text-slate-500">Flight UL-504 • Seat 14A • 1 Checked Bag (23.5 kg)</p>
                    </div>
                    <button
                      onClick={() => setSecurityStatus('frozen')}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-colors"
                    >
                      1-Click Hold
                    </button>
                  </div>
                </div>
              )}

              {securityStatus === 'frozen' && (
                <div className="p-5 bg-[#f7f8fa] rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Operational Hold Completed</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <strong>Gate B04:</strong> Turnstile locked & pass voided
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <strong>Ramp Crew:</strong> Bag offload dispatch sent (PPBM)
                    </div>
                  </div>
                  <button
                    onClick={() => setSecurityStatus('normal')}
                    className="text-xs text-slate-500 hover:text-slate-900 underline"
                  >
                    Reset preview
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Tab 4: 10s Proxmox Rollback */}
          {activeTab === 'rollback' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Proxmox Hypervisor ZFS Snapshot Rollback
                </h4>
                <p className="text-xs text-slate-500">
                  Stateless terminals restore to clean certified configurations in seconds
                </p>
              </div>

              <div className="p-6 bg-[#f7f8fa] rounded-2xl border border-slate-200 text-center space-y-3">
                <div className="text-xs text-slate-600">
                  {snapshotState === 'ready' && "All thin-client counter images healthy. No local data saved on client terminals."}
                  {snapshotState === 'restoring' && "Restoring master snapshot to terminal nodes via Proxmox cluster (ETA: 4 seconds)..."}
                  {snapshotState === 'complete' && "Rollback complete. All counter terminals synchronized with pristine image."}
                </div>

                <div>
                  {snapshotState === 'ready' && (
                    <button
                      onClick={() => {
                        setSnapshotState('restoring');
                        setTimeout(() => setSnapshotState('complete'), 1500);
                      }}
                      className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl"
                    >
                      Test 10-Second Rollback
                    </button>
                  )}
                  {snapshotState === 'complete' && (
                    <button
                      onClick={() => setSnapshotState('ready')}
                      className="text-xs text-slate-500 hover:text-slate-900 underline"
                    >
                      Reset test
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#f7f8fa] border-t border-slate-200 px-6 py-3 flex items-center justify-between">
          <span className="text-xs text-slate-500">SmartAir SriLanka</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
