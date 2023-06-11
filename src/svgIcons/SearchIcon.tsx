import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

type SearchIconProps = {
  color: string;
} & SvgProps;

const SearchIcon = (props: SearchIconProps) => (
  <Svg width="24" height="24" viewBox="-2 -2 24 24" fill="none" {...props}>
    <Path d="M13.2969 13.6694L18.6956 19.0681" stroke={props.color} strokeWidth="1.5" strokeLinecap="round" />
    <Circle cx="8.04149" cy="8.04149" r="7.29149" stroke={props.color} strokeWidth="1.5" />
  </Svg>
);

export default SearchIcon;
