import React from 'react';
import ProfileCard from './ProfileCard';

export default function ProfileGrid({ profile, onSelect}) {
    return (
        <div className="grid">
            {profile.map(p => (
                <ProfileCard
                    key={p.id}
                    profile={p}
                    onCLick={() => onSelect(p)}
                    />
            ))}
        </div>
    );
}