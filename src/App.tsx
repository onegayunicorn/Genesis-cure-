/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Cpu, Activity, AlertTriangle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a] p-8 font-sans">
      <header className="mb-12 border-b border-[#5A5A40]/20 pb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold tracking-tight text-[#1a1a1a]">GENESIS CURE 
            <span className="font-thin text-[#5A5A40]/60 mx-1">|</span> 
            <span className="text-xs uppercase tracking-widest font-sans">Mathematical Hardening</span>
          </h1>
          <p className="text-[10px] uppercase text-[#5A5A40] font-bold mt-2">System Status: Quantum Deterministic Core Enabled</p>
        </div>
        <div className="flex gap-6 items-center text-sm">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase opacity-50">Regulatory Compliance</span>
            <span className="text-xs font-mono font-bold text-[#5A5A40]">FDA GC-DOC-002 [ODD VALIDATED]</span>
          </div>
          <div className="px-3 py-1 bg-[#5A5A40]/10 border border-[#5A5A40]/30 rounded-full text-[10px] font-bold text-[#5A5A40]">PHYSICS-GROUNDED</div>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DashboardCard
          title="Quantum Simulation"
          icon={<Cpu size={20} />}
          status="Operational"
          value="Energy Accuracy: 0.05mHa"
        />
        <DashboardCard
          title="Molecular Processing"
          icon={<Activity size={20} />}
          status="Active"
          value="Fold Energy: 2.1 kcal/mol"
        />
        <DashboardCard
          title="Safety Protocols"
          icon={<Shield size={20} />}
          status="Stable"
          value="Entropy: 0.60 bits"
        />
      </main>

      <footer className="mt-16 pt-8 border-t border-[#5A5A40]/20 text-[#5A5A40]">
        <div className="flex items-center gap-2">
          <AlertTriangle size={16} />
          <span className="text-xs uppercase tracking-widest font-mono">System Stability Monitored</span>
        </div>
      </footer>
    </div>
  );
}

function DashboardCard({ title, icon, status, value }: { title: string, icon: React.ReactNode, status: string, value: string }) {
  return (
    <div className="border border-[#5A5A40]/10 p-6 rounded-xl bg-white shadow-sm hover:border-[#5A5A40]/30 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-[#5A5A40]">
          {icon}
          <h2 className="font-medium text-[#1a1a1a] font-serif">{title}</h2>
        </div>
        <span className="text-[10px] py-1 px-2 rounded-full bg-[#5A5A40]/10 text-[#5A5A40] font-bold uppercase">{status}</span>
      </div>
      <p className="text-sm text-[#1a1a1a] font-mono">{value}</p>
    </div>
  );
}
