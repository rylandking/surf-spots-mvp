import * as React from 'react';

export default function SurfSpotSection({
    titleContraction,
    skillPhrase,
    waveDirection,
    waveType,
    title,
bestPeriod }) {
    return (
        <div>
            <p>{titleContraction} surf is {skillPhrase} {waveDirection} {waveType} break.</p>
            <p>The waves at {title} are at their best with a ${period} ${swellDir} swell at around ${waveSize}. If you get it with a light ${windDir} wind at ${tide} tide, it’ll be close to as good as it gets — it’s a ${stars} star surf spot, so that means the surf would be {starDesc} for {skill} surfers.</p>
        </div >
    )
}