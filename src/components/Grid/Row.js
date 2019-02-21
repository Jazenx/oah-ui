/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  breakpointUp,
  getGridGutter,
  breakpoints
} from '../../theme/breakpoints';

const valueType = PropTypes.oneOf(Object.keys(breakpoints));

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${p => css`
    margin-right: ${getGridGutter(p.theme) / -2}px;
    margin-left: ${getGridGutter(p.theme) / -2}px;
    ${p.reverse && 'flex-direction: row-reverse;'}
  
    ${p.start &&
      breakpointUp(p.start)`
      justify-content: flex-start;
    `}
  
    ${p.center &&
      breakpointUp(p.center)`
      justify-content: center;
    `}
  
    ${p.end &&
      breakpointUp(p.end)`
      justify-content: flex-end;
    `}
  
    ${p.top &&
      breakpointUp(p.top)`
      align-items: flex-start;
    `}
  
    ${p.middle &&
      breakpointUp(p.middle)`
      align-items: center;
    `}
  
    ${p.bottom &&
      breakpointUp(p.bottom)`
      align-items: flex-end;
    `}
  
    ${p.around &&
      breakpointUp(p.around)`
      justify-content: space-around;
    `}
  
    ${p.between &&
      breakpointUp(p.between)`
      justify-content: space-between;
    `}
  `}
`;

Row.propTypes = {
  reverse: PropTypes.bool,
  start: valueType,
  center: valueType,
  end: valueType,
  top: valueType,
  middle: valueType,
  bottom: valueType,
  around: valueType,
  between: valueType,
  children: PropTypes.node
};

export default Row;