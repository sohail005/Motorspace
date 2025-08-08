import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path, Polygon } from 'react-native-svg';


const AbstractDesign = () => {
 return (
 <Svg width="100%" height="100%" viewBox="0 0 300 150">
 <Defs>
 <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
 <Stop offset="0" stopColor="#E6EBFD" stopOpacity="1" />
 <Stop offset="1" stopColor="#F5F7FB" stopOpacity="1" />
 </LinearGradient>
 </Defs>
 <Path d="M0 0 L300 0 L300 50 Q250 100 150 50 Q50 0 0 50 Z" fill="#D2DDF7" />
 <Polygon points="0,50 100,150 200,50" fill="url(#grad)" />
 <Polygon points="100,50 200,150 300,50" fill="url(#grad)" />
 <Path d="M50 140 L70 120 L90 140 Z" fill="#1A237E" />
 <Path d="M120 140 L140 120 L160 140 Z" fill="#1A237E" />
 <Path d="M190 140 L210 120 L230 140 Z" fill="#1A237E" />
 </Svg>
 );
};


export default AbstractDesign;