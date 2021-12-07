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
            <p class="mb-3">Watch this video of {titleContraction} surf to get a better feel for what the waves are like.</p>
            <div id="videoPhrase"></div>
            <p class="mb-3"> Remember, this is just one day. Always check the surf report before going.</p>
            <p class="mb-2">You can <a href={videoSearchURL}" target="_blank">watch videos of ${titleContraction} surf here</a>.</p>
            <p className="mb-2">
                Here is{' '}
                <a href={forecastLink} target="_blank" rel="noreferrer">
                    {titleContraction} surf report and surf forecast provided by {forecastPhrase}.
                </a>
            </p>
            <p className="mb-2">
                <a href={directionsLink} target="blank">
                    Click here for Google Maps directions to {titleContraction} surf parking lot.
                </a>
            </p>
            <div>
                <h3 className="mt-6 mb-2">Local Description of Surfing {title}</h3>
                <p className="mb-2">{(localsDescription.length > 20) ? { localsDescription } : `Email me to add a detailed description.`}</p>
                <h3 className="mt-6 mb-2">Want something specific?</h3>
            </div>
            <p className="mb-2">I have more info in my database. Please email me (heyryland @ gmail) what else would be helpful.</p>
        </div>
    );
}
