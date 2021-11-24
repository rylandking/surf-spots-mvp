import * as React from 'react';

export default function SurfSpotSection({ titleContraction, skillPhrase, waveDirection, waveType }) {
    return (
        <div>
            <p>{titleContraction} surf is {skillPhrase} {waveDirection} {waveType} break.</p>
        </div >
    )
}