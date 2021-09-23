/**
 * Open the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
export default async (type: 'url' | 'site', page: string) => {
    /**
     * The URL to navigate to
     * @type {String}
     */
    // await browser.execute('localStorage.clear()');
    const url = (type === 'url') ? page : browser.options.baseUrl + page;
    await browser.url(url);
};
