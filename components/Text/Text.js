import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { normalize } from '../../utils/normalizeSizes';

const TextStyles = styled.Text`
  color: ${({ color }) => color};
  font-size: ${({ size }) => normalize(size)};
  text-align: ${({ align }) => align};
`;

/**
 * Text component
 */
const Text = ({
  align,
  size,
  color,
  ...props
}) => <TextStyles align={align} size={size} color={color} {...props} />;

Text.propTypes = {
  /**
   * Alignment
  */
  align: PropTypes.oneOf(['left', 'right', 'center']),
  /**
   * Text size
  */
  size: PropTypes.number,
  /**
   * Text color
  */
  color: PropTypes.string,
};

Text.defaultProps = {
  size: 18,
  color: '#000',
};

export default Text;
