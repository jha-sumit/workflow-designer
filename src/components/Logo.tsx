import type {FunctionComponent} from "react";
import {getDarkerColor} from "@utils/colors";

type LogoProps = {
    width?: number;
    height?: number;
    backgroundColor?: string;
    tint?: number;
}
const Logo: FunctionComponent<LogoProps> = (
    {
        width = 48,
        height = 48,
        backgroundColor = "#1E1E1E",
        tint = 0.05,
    }: LogoProps
) => (
    <svg xmlns="http://www.w3.org/2000/svg"
         version="1.1"
         id="Background"
         x="0px" y="0px"
         width={width}
         height={height}
         viewBox="0 0 124 124">
        <rect width="124" height="124" fill={getDarkerColor(backgroundColor, tint)} rx={4} ry={4}/>
        <ellipse cx="48" cy="41.5" rx="19" ry="18.5" fill="#337EC5"/>
        <ellipse cx="48" cy="64.5" rx="19" ry="18.5" fill="#721B6D"/>
        <ellipse cx="74" cy="61.5" rx="19" ry="18.5" fill="#CB2727"/>
        <ellipse cx="74" cy="88.5" rx="19" ry="18.5" fill="#3D2587"/>
        <ellipse cx="48" cy="88.5" rx="19" ry="18.5" fill="#F19F05"/>
        <g opacity="0.5" filter="url(#filter1_d_0_1)">
            <path
                d="M57.164 50H72.284C80.132 50 84.056 53.852 84.056 61.556V104H71.744C70.592 104 69.656 103.604 68.936 102.812C68.216 102.02 67.856 100.976 67.856 99.68V61.34C67.856 60.188 67.568 59.36 66.992 58.856C66.488 58.352 65.3 58.1 63.428 58.1H57.164V50ZM38.264 25.916H44.852C48.02 25.916 50.396 26.708 51.98 28.292C53.636 29.804 54.464 31.784 54.464 34.232V104H42.152C41 104 40.064 103.604 39.344 102.812C38.624 102.02 38.264 100.976 38.264 99.68V25.916Z"
                fill="white"/>
        </g>
        <defs>
            <clipPath id="bgblur_0_0_1_clip_path" transform="translate(-51 -39)">
                <ellipse cx="74" cy="61.5" rx="19" ry="18.5"/>
            </clipPath>
            <filter id="filter1_d_0_1" x="34.264" y="25.916" width="53.792" height="86.084" filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>
        </defs>
    </svg>
);

export default Logo;