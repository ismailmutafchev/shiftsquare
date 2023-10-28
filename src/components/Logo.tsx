export default function Logo({ size, dark }: { size: number; dark?: boolean }) {
  const animation = "hover:scale-110 duration-200 transpalte-x-2";
  // https://ibb.co/0cqTBKh
  return (
    <div >
      <svg
        width={size}
        height={size}
        viewBox="0 0 1360 1400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className={animation} filter="url(#filter0_d_6_2)">
          <path
            d="M40 436C40 329.913 82.1427 228.172 157.157 153.157C232.172 78.1429 333.913 36.0001 440 36L440 436L40 436Z"
            fill={dark ? "#69bed4" : "#99D9EA"}
          />
        </g>
        <g className={animation} filter="url(#filter1_d_6_2)">
          <path
            d="M914 36C1020.09 36 1121.83 78.1427 1196.84 153.157C1271.86 228.172 1314 329.913 1314 436L914 436L914 36Z"
            fill={dark ? "#69bed4" : "#99D9EA"}
          />
        </g>
        <g className={animation} filter="url(#filter2_d_6_2)">
          <path
            d="M920 473C1026.09 473 1127.83 515.143 1202.84 590.157C1277.86 665.172 1320 766.913 1320 873L920 873L920 473Z"
            fill={dark ? "#69bed4" : "#99D9EA"}
          />
        </g>
        <g className={animation} filter="url(#filter3_d_6_2)">
          <path
            d="M440 1310C333.914 1310 232.172 1267.86 157.157 1192.84C82.1429 1117.83 40.0001 1016.09 40 910.001L440 910L440 1310Z"
            fill={dark ? "#69bed4" : "#99D9EA"}
          />
        </g>
        <g className={animation} filter="url(#filter4_d_6_2)">
          <path
            d="M1320 910C1320 1016.09 1277.86 1117.83 1202.84 1192.84C1127.83 1267.86 1026.09 1310 920.001 1310L920 910L1320 910Z"
            fill={dark ? "#1b1f57" : "#EFFFFF"}
          />
        </g>
        <g className={animation} filter="url(#filter5_d_6_2)">
          <path
            d="M440 873C333.913 873 232.172 830.857 157.157 755.843C82.1429 680.828 40.0001 579.087 40 473L440 473L440 873Z"
            fill={dark ? "#1b1f57" : "#EFFFFF"}
          />
        </g>
        <g className={animation} filter="url(#filter6_d_6_2)">
          <rect
            x="477"
            y="36"
            width="400"
            height="400"
            fill={dark ? "#1b1f57" : "#EFFFFF"}
          />
        </g>
        <g className={animation} filter="url(#filter7_d_6_2)">
          <rect
            x="477"
            y="473"
            width="400"
            height="400"
            fill={dark ? "#1b1f57" : "#EFFFFF"}
          />
        </g>
        <g className={animation} filter="url(#filter8_d_6_2)">
          <rect
            x="477"
            y="910"
            width="400"
            height="400"
            fill={dark ? "#69bed4" : "#99D9EA"}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_6_2"
            x="0"
            y="0"
            width="480"
            height="480"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="10"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_6_2"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.96 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_6_2"
            x="874"
            y="0"
            width="480"
            height="480"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="10"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_6_2"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.96 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_6_2"
            x="880"
            y="437"
            width="480"
            height="480"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="10"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_6_2"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.96 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_6_2"
            x="0"
            y="874"
            width="480"
            height="480"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="10"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_6_2"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.96 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d_6_2"
            x="880"
            y="874"
            width="480"
            height="480"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="10"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_6_2"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.96 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_d_6_2"
            x="0"
            y="437"
            width="480"
            height="480"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="10"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_6_2"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.96 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter6_d_6_2"
            x="437"
            y="0"
            width="480"
            height="480"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="10"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_6_2"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.96 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter7_d_6_2"
            x="437"
            y="437"
            width="480"
            height="480"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="10"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_6_2"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.96 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter8_d_6_2"
            x="437"
            y="874"
            width="480"
            height="480"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="10"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_6_2"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="15" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.96 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_2"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
