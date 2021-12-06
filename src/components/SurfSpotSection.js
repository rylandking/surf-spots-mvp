import { useEffect } from 'react';

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
    bestMonthsPhrase,
    videoPhrase,
    forecastLink,
    forecastPhrase,
    directionsLink,
    localsDescription
}) {
    useEffect(() => {
        window.onload = function setVideoPhrase() {
            document.getElementById('videoPhrase').innerHTML = videoPhrase;
        };
    });
    return (
        <div>
            <p className="mb-2">
                {titleContraction} surf is {skillPhrase} {waveDirection} {waveType} break.
            </p>
            <p className="mb-2">
                The waves at {title} are at their best with a {bestPeriod} {bestSwellDirection} swell at around {bestSize}. If you get it with a light{' '}
                {bestWind} wind at {bestTide} tide, it’ll be close to as good as it gets. {title} is a {stars} star surf spot, so that means the surf would be{' '}
                {starsDesc} for {skill} and above surfers.
            </p>
            <p className="mb-2">
                The best time of year to surf {title} {bestMonthsPhrase}.
            </p>
            <div id="videoPhrase"></div>
            <p className="mb-2">
                You can{' '}
                <a href={forecastLink} target="_blank" rel="noreferrer">
                    find {titleContraction} surf report and surf forecast here provided by {forecastPhrase}.
                </a>
            </p>
            <p className="mb-2">
                <a href={directionsLink} target="blank">
                    Click here for Google Maps directions to {titleContraction} surf parking lot.
                </a>
            </p>
            {(localsDescription.length) ?
            <h3 className="mt-6 mb-2">Local Description of Surfing {title}</h3>
            <p className="mb-2">{localsDescription}</p>
            <h3 className="mt-6 mb-2">Want something specific?</h3>
            <p className="mb-2">I have more info in my database. Please email me (heyryland @ gmail) what else would be helpful.</p>
        </div>
    );
}
