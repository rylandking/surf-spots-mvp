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
    bestMonthsPhrase,
    videoPhrase }) {

    window.onload = function setVideoPhrase() {
        document.getElementById('videoPhrase').innerHTML = 'helloooooo';
    };
    useEffect(() => {
    // Client-side-only code
})
    return (
        <div>
            <p className="mb-2">{titleContraction} surf is {skillPhrase} {waveDirection} {waveType} break.</p>
            <p className="mb-2">The waves at {title} are at their best with a {bestPeriod} {bestSwellDirection} swell at around {bestSize}. If you get it with a light {bestWind} wind at {bestTide} tide, it’ll be close to as good as it gets — {title} is a {stars} star surf spot, so that means the surf would be {starsDesc} for {skill} surfers.</p>
            <p class="mb-2">The best time of year to surf {title} {bestMonthsPhrase}.</p>
            {videoPhrase}
            <p id="videoPhrase"></p>
            <p class="mb-2">Watch this video of 15th Street's surf to get a better feel for what the waves are like.</p> <iframe class="mb-2" width="560" height="315" src="https://www.youtube-nocookie.com/embed/VuQ23mhyBV8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> <p class="mb-2"> Remember, this is just one day. Always check the surf report before going. You can <a href="https://www.google.com/search?q=15th Street%20surf&tbm=vid" target="_blank">watch other videos of 15th Street's surf here</a>.</p>
        </div >
    )
}