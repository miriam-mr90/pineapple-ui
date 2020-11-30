const theme = {
    color: {
        white: '#FFF',

        neutralGray: '#9B9B9B',
        neutralGrayLightest: '#FAFAFA',
        neutralGrayLight: '#D2D2D2',
        neutralGrayDark: '#404040',
        neutralGrayDarker: '#757575',
        neutralGrayDarkest: '#2B2B2B',

        brandPrimary: 'hotpink',
    },

    font: {
        family: 'Montserrat, sans-serif',
        lineHeight: '22px',
        size: '16px',
        weightBold: '600',
    },

    radius: '4px',
    boxShadow: '0px 0px 8px rgba(255, 115, 0, 0.2)',

    device: {
        mobile: `(min-width: 320px)`,
        tablet: `(min-width: 768px)`,
        laptop: `(min-width: 1024px)`,
        desktop: `(min-width: 2560px)`
    }
}

export default theme;