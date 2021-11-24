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
    let skillPhrase;
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
    let janRating;
    let febRating;
    let marRating;
    let aprRating;
    let mayRating;
    let junRating;
    let julRating;
    let augRating;
    let sepRating;
    let octRating;
    let novRating;
    let decRating;
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
    let airportLatLng;
    let localsDescription;

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
	if (tide === 'all') {
		tide = 'any';
    }
    
    // Set stars phrase
	if (stars === 1) {
		stars = '1';
		starDesc = 'for the desperate';
	} else if (stars === 2) {
		stars = '2';
		starDesc = 'a good time if you need to get wet';
	} else if (stars === 3 Stars') {
		stars = '3';
		starDesc = 'pretty fun';
	} else if (stars === '4 Stars') {
		stars = '4';
		starDesc = 'super fun';
	} else if (stars === '5 Stars') {
		stars = '5';
		starDesc = 'world class';
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