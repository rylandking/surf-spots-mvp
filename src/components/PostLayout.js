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

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-post-layout">
                <article className="colors-a px-4 sm:px-8 py-14 lg:py-20">
                    <div className="max-w-screen-2xl mx-auto">
                        <header className="max-w-screen-md mx-auto mb-12 text-center">
                            {page.title && <h1 data-sb-field-path="title">{page.title}</h1>}
                            {page.author && postAuthor(page.author)}
                        </header>
                        <SurfSpotSection />
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

function postAuthor(author) {
    return (
        <div className="text-lg mt-6">
            By{' '}
            <span data-sb-field-path="author">
                {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
                {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
            </span>
        </div>
    );
}
