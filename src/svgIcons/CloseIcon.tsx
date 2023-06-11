import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

interface CloseIconProps extends SvgProps {
  fillColor?: string;
}

export const CloseIcon = (props: CloseIconProps) => (
  <Svg width={36} height={36} fill="none">
    <Circle cx={18} cy={18} r={16.75} fill={props.fillColor || '#fff'} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      d="m11.934 24.082 12.147-12.148M12.061 11.934l12.147 12.148"
    />
  </Svg>
);

export default CloseIcon;
