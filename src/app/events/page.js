'use client';

import { useState, useEffect } from 'react';
import EventCard from '@/components/EventCard';
import { useUser } from '@clerk/nextjs';
import TierModal from '@/components/TierModal';

const Event = () => {
  const tiers = ['free', 'silver', 'gold', 'platinum'];
  const { user } = useUser();
  const [events, setEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const userTier = user?.publicMetadata?.tier || 'free';

  const filterTiers = events.filter((event) => {
    const userTierIndex = tiers.indexOf(userTier);
    const eventTierIndex = tiers.indexOf(event.tier);
    return eventTierIndex <= userTierIndex;
  });

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch('/api/event');
      const data = await res.json();
      setEvents(data);
      setLoading(false);
    }
    fetchEvents();
  }, []);

  const handleUpgrade = async (tier) => {
    setIsOpen(false);

    try {
      const res = await fetch('/api/set-tier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier }),
      });

      if (res.ok) {
        alert(`Tier upgraded to ${tier}`);
        window.location.reload();
      } else {
        alert('Upgrade failed');
      }
    } catch (err) {
      console.error('Error upgrading tier:', err);
    }
  };

  return (
    <>
    {loading ? (
  <div className="flex justify-center items-center h-96">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-600"></div>
  </div>
) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 justify-items-center p-6">
        {filterTiers.map((item) => (
          <EventCard key={item.id} {...item} />
        ))}
      </div>
      )}

      <div className="flex flex-col items-center mt-8 text-center space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Want to unlock more exclusive events?
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 bg-purple-600 text-white font-medium rounded hover:bg-purple-700 transition"
        >
          Upgrade/Change Plan
        </button>
      </div>

      <TierModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSelectTier={handleUpgrade}
      />
    </>
  );
};

export default Event;