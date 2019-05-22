import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
const breakpoints = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

breakpoints.tall = (...args) => css`
  @media (min-height: 44rem) {
    ${css(...args)}
  }
`;

export default breakpoints;