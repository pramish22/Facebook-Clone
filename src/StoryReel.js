import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://cdn140.picsart.com/327464379069201.jpg?type=webp&to=crop&r=256"
            profileSrc="https://cdn131.picsart.com/323779276307201.jpg?type=webp&to=crop&r=256"
            title="Model" />

            <Story image="https://cdn131.picsart.com/315934060092201.jpg?type=webp&to=crop&r=256"
            profileSrc="https://cdn131.picsart.com/323038550298201.jpg?type=webp&to=crop&r=256"
            title="Bearded Guy" />

            <Story image="https://cdn141.picsart.com/325429489094201.jpg?type=webp&to=crop&r=256"
            profileSrc="https://cdn131.picsart.com/325488229053201.jpg?type=webp&to=crop&r=256"
            title="Photoshop" />
        </div>
    )
}

export default StoryReel
