import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import { getBaseLayoutComponent } from '@stackbit/components/dist/utils/base-layout';
import { getComponent } from '@stackbit/components/dist/components-registry';
import SurfSpotSection from './SurfSpotSection';

export default function PostLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const sections = page.bottomSections || [];

    let title = page.title
        .replace(/-/g, ' ')
        .toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    let titleContraction;
    let surfSpotLat = page.surfSpotLat;
    let surfSpotLng = page.surfSpotLng;

    let directionsLink = `https://www.google.com/maps?saddr=My+Location&daddr=${surfSpotLat},${surfSpotLng}`;
    let mapZoom = page.mapZoom;
    let parkingLat = page.parkingLat;
    let parkingLng = page.parkingLng;
    let parkingLatLng = page.parkingLatLng;

    let skill = page.skill;
    let skillPhrase;
    let bestSize = page.bestSize;
    let bestPeriod = page.bestPeriod;
    let bestTide = page.bestTide;
    let bestWind = page.bestWind;
    let bestSwellDirection = page.bestSwellDirection;
    let waveType = page.waveType;
    let bottomType;
    let isBigWave;
    let isBarrel;
    let waveDirection = page.waveDirection;
    let waveQuality = page.waveQuality;

    let stars;
    let starsDesc;
    let bestBoard;

    let forecastLink = page.forecastLink;
    let forecastPhrase;
    let videoLink = page.videoLink;
    let youTubeID;
    let videoEmbed;
    let videoSearchURL;
    let videoPhrase;

    let jan = Number(page.jan);
    let feb = Number(page.feb);
    let mar = Number(page.mar);
    let apr = Number(page.apr);
    let may = Number(page.may);
    let jun = Number(page.jun);
    let jul = Number(page.jul);
    let aug = Number(page.aug);
    let sep = Number(page.sep);
    let oct = Number(page.oct);
    let nov = Number(page.nov);
    let dec = Number(page.dec);
    let bestMonths = [];
    let bestMonthsPhrase;

    let beachComfort;
    let crowdLevel;
    let localismLevel;
    let accessibility;
    let isPowerful;
    let waterTemp;
    let isWalkable;
    let isSharky;
    let isEasyToGetWaves;
    let isFarFromShore;
    let isBeginnerFriendly;
    let isUncrowded;
    let isShallow;
    let isCompetitive;
    let lessonsNearby;
    let rentalsNearby;

    let airportName;
    let airportCode;
    let airportCoords;
    let localsDescription = page.localsDescription;

    // Set surf spot contraction
    if (title.endsWith('s')) {
        titleContraction = `${title}'`;
    } else {
        titleContraction = `${title}'s`;
    }

    // Set skill phrase
    if (skill === 'beginner') {
        skillPhrase = `a ${skill}`;
    } else {
        skillPhrase = `an ${skill}`;
    }

    // Set waveDir phrase
    if (waveDirection === 'both') {
        waveDirection = `right and left `;
    }

    // Set period phrase
    if (bestPeriod === '7-10 sec') {
        bestPeriod = '7 to 10 second';
    } else if (bestPeriod === '10-13 sec') {
        bestPeriod = '10 to 13 second';
    } else if (bestPeriod === '13-16 sec') {
        bestPeriod = '13 to 16 second';
    } else {
        bestPeriod = '16+ seconds';
    }

    // Set swell direction
    if (bestSwellDirection === 'W') {
        bestSwellDirection = 'West';
    } else if (bestSwellDirection === 'SW') {
        bestSwellDirection = 'Southwest';
    } else if (bestSwellDirection === 'S') {
        bestSwellDirection = 'South';
    } else if (bestSwellDirection === 'SE') {
        bestSwellDirection = 'Southeast';
    } else if (bestSwellDirection === 'E') {
        bestSwellDirection = 'East';
    } else if (bestSwellDirection === 'NE') {
        bestSwellDirection = 'Northeast';
    } else if (bestSwellDirection === 'N') {
        bestSwellDirection = 'North';
    } else if (bestSwellDirection === 'NW') {
        bestSwellDirection = 'Northwest';
    }

    // Set wave size phrase
    if (bestSize === '2-4 ft') {
        bestSize = '2 to 4 feet';
    } else if (bestSize === '3-5 ft') {
        bestSize = '3 to 5 feet';
    } else if (bestSize === '5-7 ft') {
        bestSize = '5 to 7 feet';
    } else if (bestSize === '8-10 ft+') {
        bestSize = '8 to 10 feet and bigger';
    } else if (bestSize === '8-10+ ft') {
        bestSize = '8 to 10 feet and bigger';
    }

    // Set wind phrase
    if (bestWind === 'W') {
        bestWind = 'West';
    } else if (bestWind === 'SW') {
        bestWind = 'Southwest';
    } else if (bestWind === 'S') {
        bestWind = 'South';
    } else if (bestWind === 'SE') {
        bestWind = 'Southeast';
    } else if (bestWind === 'E') {
        bestWind = 'East';
    } else if (bestWind === 'NE') {
        bestWind = 'Northeast';
    } else if (bestWind === 'N') {
        bestWind = 'North';
    } else if (bestWind === 'NW') {
        bestWind = 'Northwest';
    }

    // Set tide phrase
    if (bestTide === 'all') {
        bestTide = 'any';
    }

    // Set waveQuality phrase
    if (waveQuality === '1') {
        stars = '1';
        starsDesc = 'for the desperate';
    } else if (waveQuality === '2') {
        stars = '2';
        starsDesc = 'a good time if you need to get wet';
    } else if (waveQuality === '3') {
        stars = '3';
        starsDesc = 'pretty fun';
    } else if (waveQuality === '4') {
        stars = '4';
        starsDesc = 'super fun';
    } else if (waveQuality === '5') {
        stars = '5';
        starsDesc = 'world class';
    }

    // Set best months phrase
    if (jan === 100) {
        jan = 'January';
        bestMonths.push(jan);
    } else {
        jan = '';
    }

    if (feb === 100) {
        feb = 'Febuary';
        bestMonths.push(feb);
    } else {
        feb = '';
    }

    if (mar === 100) {
        mar = 'March';
        bestMonths.push(mar);
    } else {
        mar = '';
    }

    if (apr === 100) {
        apr = 'April';
        bestMonths.push(apr);
    } else {
        apr = '';
    }

    if (may === 100) {
        may = 'May';
        bestMonths.push(may);
    } else {
        may = '';
    }

    if (jun === 100) {
        jun = 'June';
        bestMonths.push(jun);
    } else {
        jun = '';
    }

    if (jul === 100) {
        jul = 'July';
        bestMonths.push(jul);
    } else {
        jul = '';
    }

    if (aug === 100) {
        aug = 'August';
        bestMonths.push(aug);
    } else {
        aug = '';
    }

    if (sep === 100) {
        sep = 'September';
        bestMonths.push(sep);
    } else {
        sep = '';
    }

    if (oct === 100) {
        oct = 'October';
        bestMonths.push(oct);
    } else {
        oct = '';
    }

    if (nov === 100) {
        nov = 'November';
        bestMonths.push(nov);
    } else {
        nov = '';
    }

    if (dec === 100) {
        dec = 'December';
        bestMonths.push(dec);
    } else {
        dec = '';
    }

    if (bestMonths.length === 0) {
        bestMonthsPhrase = 'is not available';
    } else if (bestMonths.length === 1) {
        bestMonthsPhrase = `is in ${bestMonths[0]}`;
    } else if (bestMonths.length === 2) {
        bestMonthsPhrase = `is in ${bestMonths[0]}, and ${bestMonths[1]}`;
    } else if (bestMonths.length === 3) {
        bestMonthsPhrase = `is in ${bestMonths[0]}, ${bestMonths[1]}, and ${bestMonths[2]}`;
    } else if (bestMonths.length === 4) {
        bestMonthsPhrase = `is in ${bestMonths[0]}, ${bestMonths[1]}, ${bestMonths[2]}, and ${bestMonths[3]}`;
    } else if (bestMonths.length === 5) {
        bestMonthsPhrase = `is in ${bestMonths[0]}, ${bestMonths[1]}, ${bestMonths[2]}, ${bestMonths[3]}, and ${bestMonths[4]}`;
    } else if (bestMonths.length === 6) {
        bestMonthsPhrase = `is in ${bestMonths[0]}, ${bestMonths[1]}, ${bestMonths[2]}, ${bestMonths[3]}, ${bestMonths[4]}, and ${bestMonths[5]}`;
    } else if (bestMonths.length === 7) {
        bestMonthsPhrase = `is in ${bestMonths[0]}, ${bestMonths[1]}, ${bestMonths[2]}, ${bestMonths[3]}, ${bestMonths[4]}, ${bestMonths[5]}, and  ${bestMonths[6]}`;
    } else if (bestMonths.length === 8) {
        bestMonthsPhrase = `is in ${bestMonths[0]}, ${bestMonths[1]}, ${bestMonths[2]}, ${bestMonths[3]}, ${bestMonths[4]}, ${bestMonths[5]}, ${bestMonths[6]}, and ${bestMonths[7]}`;
    } else if (bestMonths.length === 9) {
        bestMonthsPhrase = `is in ${bestMonths[0]}, ${bestMonths[1]}, ${bestMonths[2]}, ${bestMonths[3]}, ${bestMonths[4]}, ${bestMonths[5]}, ${bestMonths[6]}, ${bestMonths[7]}, and ${bestMonths[8]}`;
    } else if (bestMonths.length === 10) {
        bestMonthsPhrase = `is in ${bestMonths[0]}, ${bestMonths[1]}, ${bestMonths[2]}, ${bestMonths[3]}, ${bestMonths[4]}, ${bestMonths[5]}, ${bestMonths[6]}, ${bestMonths[7]}, ${bestMonths[8]}, and ${bestMonths[9]}`;
    }

    // Set video phrase
    if (videoLink) {
        if (videoLink.includes('youtu.be')) {
            youTubeID = videoLink.split('.be/')[1];
            youTubeID = youTubeID.split('?')[0];
        } else {
            youTubeID = videoLink.split('v=')[1];
        }

        videoEmbed = `<iframe class="mb-3" width="560" height="315" src="https://www.youtube-nocookie.com/embed/${youTubeID}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;

        videoSearchURL = `https://www.google.com/search?q=${title}%20surf&tbm=vid`;

        videoPhrase = `
            <p class="mb-3">Watch this video of ${titleContraction} surf to get a better feel for what the waves are like.</p>
            ${videoEmbed}
            <p class="mb-3"> Remember, this is just one day. Always check the surf report before going. You can <a href="${videoSearchURL}" target="_blank">watch other videos of ${titleContraction} surf here</a>.</p>
        `;
    } else {
        videoSearchURL = `https://www.google.com/search?q=${title}&tbm=vid`;

        videoPhrase = `
      <p class="mb-2">You can <a href="${videoSearchURL}" target="_blank">watch videos of ${titleContraction} surf here</a>.</p>
    `;
    }

    // Set forecastPhrase
    if (forecastLink.includes('magicseaweed')) {
        forecastPhrase = 'Magicseaweed';
    } else if (forecastLink.includes('surfline')) {
        forecastPhrase = 'Surfline';
    } else if (forecastLink.includes('surf-forecast')) {
        forecastPhrase = 'Surf-Forecast.com';
    } else if (forecastLink.includes('shaka')) {
        forecastPhrase = 'Shaka Bay';
    } else if (forecastLink.includes('yosurfer')) {
        forecastPhrase = 'Yo Surfer';
    }

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-post-layout">
                <article className="px-4 colors-a sm:px-8 py-14 lg:py-20">
                    <div className="mx-auto max-w-screen-2xl">
                        <header className="max-w-screen-md mx-auto mb-12 text-center">{title && <h1 data-sb-field-path="title">{title} Surf Spot</h1>}</header>
                        <SurfSpotSection
                            titleContraction={titleContraction}
                            skillPhrase={skillPhrase}
                            waveDirection={waveDirection}
                            waveType={waveType}
                            title={title}
                            bestPeriod={bestPeriod}
                            bestSwellDirection={bestSwellDirection}
                            bestSize={bestSize}
                            bestWind={bestWind}
                            bestTide={bestTide}
                            stars={stars}
                            starsDesc={starsDesc}
                            skill={skill}
                            bestMonthsPhrase={bestMonthsPhrase}
                            videoPhrase={videoPhrase}
                            forecastLink={forecastLink}
                            forecastPhrase={forecastPhrase}
                            directionsLink={directionsLink}
                            localsDescription={localsDescription}
                        />
                        {page.markdown_content && (
                            <Markdown options={{ forceBlock: true }} className="max-w-screen-md mx-auto sb-markdown" data-sb-field-path="markdown_content">
                                {page.markdown_content}
                            </Markdown>
                        )}
                    </div>
                </article>
                {sections.length > 0 && (
                    <div data-sb-field-path="bottomSections">
                        {sections.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return (
                                <div key={index} data-sb-field-path={`bottomSections.${index}`}>
                                    <Component {...section} />
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}
