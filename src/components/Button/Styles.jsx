import styled, { css } from "styled-components";

const BaseStyles = styled.button`
    ${({ theme, buttonType }) => css`
        border: 0;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
        box-sizing: border-box;
        cursor: pointer;
        outline: 0;
        transition: all .25s;

        ${buttonType === 'secondary' && css`
            background-color: ${theme.color.white};
            color: #606F7B;
            border: 1px solid #DAE1E7;

            &:hover {
                background-color:  ${theme.color.brandPrimary};
                color: ${theme.color.white};
            }

        ` || css`
            background-color: ${theme.color.brandPrimary};
            color: ${theme.color.white};

            &:hover {
                background-color:  ${theme.color.brandPrimaryDark};
            }
        `}
    `}
`;

const StyledButton = styled(BaseStyles)`
    ${({ theme, size }) => css`
        ${size === 'small' && css`
            border-radius: 4px;
            font-size: 12px;
            line-height: 13.8px;
            padding: 8px 32px;

        ` || size === 'large' && css`
            border-radius: 8px;
            font-size: 18px;
            line-height: 20.7px;
            padding: 16px 64px;

        ` || css`
            border-radius: 8px;
            font-size: 16px;
            line-height: 24px;
            padding: 8px 32px;
        `}
    `}
`;

export {
    StyledButton,
};
