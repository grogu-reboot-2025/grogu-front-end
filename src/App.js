
import React, { useState, useEffect } from 'react';
import { fetchProfiles } from './component/api';
import ProfileGrid from './component/ProfileGrid';
import ProfileModal from './component/ProfileModal';

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
