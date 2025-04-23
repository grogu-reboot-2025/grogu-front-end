
import React, { useState, useEffect } from 'react';
import { fetchProfiles } from './api';
import ProfileGrid from './ProfileGrid';
import ProfileModal from './ProfileModal';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchProfiles()
      .then(setProfiles)
      .catch(console.error);
  }, []);

  return (
    <>
      <ProfileGrid profiles={profiles} onSelect={setSelected} />
      {selected && (
        <ProfileModal profile={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

export default App;
