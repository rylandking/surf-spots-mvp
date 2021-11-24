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
    starsDesc,
    skill,
    bestMonthsPhrase }) {
    return (
        <div>
            <p className="mb-2">{titleContraction} surf is {skillPhrase} {waveDirection} {waveType} break.</p>
            <p className="mb-2">The waves at {title} are at their best with a {bestPeriod} {bestSwellDirection} swell at around {bestSize}. If you get it with a light {bestWind} wind at {bestTide} tide, it’ll be close to as good as it gets — {title} is a {stars} star surf spot, so that means the surf would be {starsDesc} for {skill} surfers.</p>
            <p class="mb-2">The best time to surf {title} {bestMonthsPhrase}.</p>
        </div >
    )
}