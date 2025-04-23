import React from 'react';

export default function ProfileCard({ profile, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img 
            src="profile.image" alt="" />
            <h2>{profile.name}</h2>
            <h4>{profile.bio}</h4>
        </div>
    )
}