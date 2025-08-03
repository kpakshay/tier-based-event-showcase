'use client'

export default function TierModal({ isOpen, onClose, onSelectTier }) {
  if (!isOpen) return null;

  const tiers = [
    { name: 'Free', color: 'bg-gray-300 text-black' },
    { name: 'Silver', color: 'bg-gray-400 text-white' },
    { name: 'Gold', color: 'bg-yellow-500 text-white' },
    { name: 'Platinum', color: 'bg-indigo-600 text-white' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-xl text-center space-y-4 relative">
        <h2 className="text-xl font-bold">Upgrade Your Tier</h2>
        <p className="text-sm text-gray-500">Choose a tier to unlock more events</p>

        <div className="grid grid-cols-2 gap-4">
          {tiers.map(tier => (
            <button
              key={tier.name}
              onClick={() => onSelectTier(tier.name.toLowerCase())}
              className={`p-3 rounded-md font-semibold hover:scale-105 transition ${tier.color}`}
            >
              {tier.name}
            </button>
          ))}
        </div>

        <button onClick={onClose} className="absolute top-3 right-4 text-gray-400 text-xl">
          &times;
        </button>
      </div>
    </div>
  );
}
