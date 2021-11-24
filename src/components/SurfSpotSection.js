import * as React from 'react';

export default function SurfSpotSection({
    titleContraction,
    skillPhrase,
    waveDirection,
    waveType,
    title,
    bestPeriod,
    bestSwellDirection,
    bestSize,
    bestWind,
    bestTide,
    stars,
    starsDesc }) {
    return (
        <div>
            <p>{titleContraction} surf is {skillPhrase} {waveDirection} {waveType} break.</p>
            <p>The waves at {title} are at their best with a ${bestPeriod} ${bestSwellDirection} swell at around ${bestSize}. If you get it with a light {bestWind} wind at {bestTide} tide, it’ll be close to as good as it gets — it’s a {stars} star surf spot, so that means the surf would be {starsDesc} for {skill} surfers.</p>
        </div >
    )
}