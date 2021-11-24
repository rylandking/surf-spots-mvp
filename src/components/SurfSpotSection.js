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
    surfSpotLat,
    surfSpotLng }) {

    useEffect(() => {
        window.onload = function setVideoPhrase() {
            document.getElementById('videoPhrase').innerHTML = videoPhrase;
        };
    })
    return (
        <div>
            <p className="mb-2">{titleContraction} surf is {skillPhrase} {waveDirection} {waveType} break.</p>
            <p className="mb-2">The waves at {title} are at their best with a {bestPeriod} {bestSwellDirection} swell at around {bestSize}. If you get it with a light {bestWind} wind at {bestTide} tide, it’ll be close to as good as it gets. {title} is a {stars} star surf spot, so that means the surf would be {starsDesc} for {skill} and above surfers.</p>
            <p class="mb-2">The best time of year to surf {title} {bestMonthsPhrase}.</p>
            <div id="videoPhrase"></div>
            <p class="mb-2">You can <a href={forecastLink} target="_blank">find {titleContraction} {forecastPhrase} surf report and surf forecast here.</a></p>
            <p class="mb-2">Get Google Maps <a href="https://www.google.com/maps?saddr=My+Location&daddr="{surf}","{}43.12345,-76.12345 target="blank">directions to {titleContraction} parking lot.</a></p>
        </div >
    )
}