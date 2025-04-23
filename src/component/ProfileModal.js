import React,{ useEffect } from 'react';

export default function ProfileModal({ profile, onClose }) {
    useEffect (() => {
        function handleKey(event) {
            if (event.key === 'Escape') onClose();
        }
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey)
    }, [onClose]);

    return(
        <div className="overlay" onClick={onClose}>
            <div className="modal" onClick={event => event.stopPropagation()}>
                <img src={profile.image} alt="" />
                <h2>{profile.name}</h2>
                <h4>{profile.bio}</h4>
            </div>
        </div>
    );
}