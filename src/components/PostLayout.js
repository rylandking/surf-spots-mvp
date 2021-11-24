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
    let surfSpotLatLng;
    let mapZoom;
    let parkingLatLng;
  
    let skill; intermediate
    let bestSize; 5-7 ft
    let bestPeriod; 13-16 sec
    let bestTide; medium
    let bestWind; E
    let bestSwellDirection; S
    let waveType;
    let label; Beach
    let value; beach
    let bottomType;
    let label; Sand
    let value; sand
    let isBigWave; false
    let isBarrel; 'no'
    let waveDirection; both
    let waveQuality; '4'
    let forecastLink; 'https;//magicseaweed.com/Del-Mar-Surf-Report/3707/'
    let videoLink; 'https;//youtu.be/VuQ23mhyBV8'
    let bestBoard; long-board
    let janRating;
    let label; Green
    let value; 100
    let febRating;
    let label; Green
    let value; 100
    let marRating; '60'
    let aprRating; '60'
    let mayRating; '80'
    let junRating;
    let label; Green
    let value; 100
    let julRating;
    let label; Green
    let value; 100
    let augRating;
    let label; Green
    let value; 100
    let sepRating;
    let label; Green
    let value; 100
    let octRating;
    let label; Green
    let value; 100
    let novRating;
    let label; Green
    let value; 100
    let decRating;
    let label; Green
    let value; 100
    let beachComfort;
    let label; Comfortable
    let value; comfortable
    let crowdLevel; spread-out
    let localismLevel; 'no'
    let accessibility;
    let label; Park
    let value; park
    let isPowerful; false
    let waterTemp;
    let label; Wetsuit
    let value; wetsuit
    let isWalkable; false
    let isSharky; false
    let isEasyToGetWaves; true
    let isFarFromShore; false
    let isBeginnerFriendly; false
    let isUncrowded; false
    let isShallow; false
    let isCompetitive; false
    let lessonsNearby; false
    let rentalsNearby; false
    let airportName; San Diego International Airport
    let airportCode; SAN
    let airportLatLng;
    let - lat; 32.731507
        let long; -117.200598
    let localsDescription; >-
    Super fun intermediate beach break waves with a killer beach and grassy area for families and friends. One of those spots that you can almost always have fun at at any time of the year. Go with a bit of caution in the winter time, as if there is a big winter Northwest swell the waves can become pretty gnarly. Park in the lot just after 18th Street and walk South for a minute or two to get to the waves. Do a fancy meal at Jake’s Del Mar or head out to Board and Brew for a cheaper, more relaxed option after your surf day.

    // Set surf spot contraction
    if (title.endsWith('s')) {
        titleContraction = `${title}'`;
    } else {
        titleContraction = `${title}'s`;
    }

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-post-layout">
                <article className="colors-a px-4 sm:px-8 py-14 lg:py-20">
                    <div className="max-w-screen-2xl mx-auto">
                        <header className="max-w-screen-md mx-auto mb-12 text-center">
                            {page.title && <h1 data-sb-field-path="title">{page.title}</h1>}
                        </header>
                        <SurfSpotSection titleContraction={titleContraction} />
                        {page.markdown_content && (
                            <Markdown options={{ forceBlock: true }} className="sb-markdown max-w-screen-md mx-auto" data-sb-field-path="markdown_content">
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