export const logPageView = () => {
    console.log(`Logging pageview for ${window.location.pathname}`)
    window.gtag('config', 'G-0LJT87N0WG', {
        page_path: window.location.pathname,
    })
}
export const logEvent = ({ action, params }) => {
    window.gtag('event', action, params)
}

//G-0LJT87N0WG