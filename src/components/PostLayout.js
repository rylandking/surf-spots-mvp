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
    let skill;
    let bestSize; 
    let bestPeriod;
    let bestTide;
    let bestWind;
    let bestSwellDirection;
    let waveType
    let bottomType
    let isBigWave;
    let isBarrel;
    let waveDirection;
    let waveQuality;
    let forecastLink;
    let videoLink;
    let bestBoard;
    let janRating
    let febRating
    let marRating;
    let aprRating;
    let mayRating;
    let junRating
    let julRating
    let augRating
    let sepRating
    let octRating
    let novRating
    let decRating
    let beachComfort
    let crowdLevel;
    let localismLevel;
    let accessibility
    let isPowerful;
    let waterTemp
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
    let airportLatLng;
    let localsDescription;
    Super fun intermediate beach break waves with a killer beach and grassy area for families and friends.One of those spots that you can almost always have fun at at any time of the year.Go with a bit of caution in the winter time, as if there is a big winter Northwest swell the waves can become pretty gnarly.Park in the lot just after 18th Street and walk South for a minute or two to get to the waves.Do a fancy meal at Jake’s Del Mar or head out to Board and Brew for a cheaper, more relaxed option after your surf day.

        // Set surf spot contraction
        if(title.endsWith('s')) {
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