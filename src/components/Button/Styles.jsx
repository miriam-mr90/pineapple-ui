import styled, { css } from "styled-components";

const sizeStyles = size => {
    switch (size) {
      case 'small':
        return css`
            border-radius: 4px;
            font-size: 12px;
            line-height: 13.8px;
            padding: 8px 32px;
        `
      case 'large':
        return css`
            border-radius: 8px;
            font-size: 18px;
            line-height: 20.7px;
            padding: 16px 64px;
        `
      default:
        return css`
            border-radius: 8px;
            font-size: 16px;
            line-height: 24px;
            padding: 8px 32px;
        `
    }
};

const buttonTypeStyles = (theme, size) => {
    switch (theme, size) {
      case 'secondary':
        return css`
            background-color: ${theme.color.white};
            color: #606F7B;
            border: 1px solid #DAE1E7;

            &:hover {
                background-color:  ${theme.color.brandPrimary};
                color: ${theme.color.white};
            }
        `
      default:
        return css`
            background-color: ${theme.color.brandPrimary};
            color: ${theme.color.white};

            &:hover {
                background-color:  ${theme.color.brandPrimaryDark};
            }
        `
    }
};

const StyledButton = styled.button`
    ${({ theme, buttonType, size, isLoading }) => css`
        border: 0;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
        box-sizing: border-box;
        cursor: pointer;
        outline: 0;
        transition: all .25s;

        ${sizeStyles(size)};
        ${buttonTypeStyles(theme, buttonType)};

        ${isLoading && css`
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-indent: -9999px;
        `};
    `}
`;

export {
    StyledButton,
};
