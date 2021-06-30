import React from 'react';

const Svg = ({ color, size, viewBox = '0 0 24 24', children, title, ...props }) => (
    <svg xmlns='http://www.w3.org/2000/svg' fill={color} height={size} width={size} viewBox={viewBox} stroke='currentColor' strokeWidth='0' {...props}>
        {title && <title>{title}</title>}
        {children}
    </svg>
);

const IconLocation = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 512 512' color={color} x='0px' y='0px' {...props}>
        <circle cx='256' cy='192' r='32' />
        <path d='M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0051.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z' />
    </Svg>
);

const IconCall = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 512 512' color={color} x='0px' y='0px' {...props}>
        <path d='M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z' />
    </Svg>
);

const IconMail = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 512 512' color={color} x='0px' y='0px' {...props}>
        <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z' />
    </Svg>
);

const IconFacebook = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 512 512' color={color} x='0px' y='0px' {...props}>
        <path d='M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z' fillRule='evenodd' />
    </Svg>
);

const IconTwitter = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 512 512' color={color} x='0px' y='0px' {...props}>
        <path d='M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z' />{' '}
    </Svg>
);

const IconLinkedin = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 512 512' color={color} x='0px' y='0px' {...props}>
        <path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z' />{' '}
    </Svg>
);

const IconSnapchat = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 512 512' color={color} x='0px' y='0px' {...props}>
        <path d='M496 347.21a190.31 190.31 0 01-32.79-5.31c-27.28-6.63-54.84-24.26-68.12-52.43-6.9-14.63-2.64-18.59 11.86-24 14.18-5.27 29.8-7.72 36.86-23 5.89-12.76 1.13-27.76-10.41-35.49-15.71-10.53-30.35-.21-46.62 2.07 3.73-46.66 8.66-88.57-22.67-127.73C338.14 48.86 297.34 32 256.29 32s-81.86 16.86-107.81 49.33c-31.38 39.26-26.4 81.18-22.67 127.92-16.32-2.25-30.81-12.79-46.63-2.18-14.72 9.85-17 29.76-5.44 43s31.64 9.5 43.45 20.6c6.49 6.09 3.49 12.61-.35 20.14-14.48 28.4-39.26 45.74-69.84 51.56-4 .76-22.31 2.87-31 3.65 0 9.28.52 16.78 1.63 21.73 2.94 13.06 12.32 23.58 23.69 30.1 11.18 6.4 35.48 6.43 41.68 15.51 3 4.48 1.76 12.28 5.33 17.38a23.8 23.8 0 0015.37 9.75c18.61 3.61 37.32-7.2 56.42-2.1 14.85 3.95 26.52 15.87 39.26 24 15.51 9.85 32.34 16.42 50.83 17.49 38.1 2.21 59.93-18.91 90.58-36.42 19.5-11.14 38.15-3.86 58.88-2.68 20.1 1.15 23.53-9.25 29.62-24.88a27.37 27.37 0 001.54-4.85 10.52 10.52 0 002.28-1.47c2-1.57 10.55-2.34 12.76-2.86 10.28-2.44 20.34-5.15 29.17-11.2 11.31-7.76 17.65-18.5 19.58-32.64a93.73 93.73 0 001.38-15.67zM208 128c8.84 0 16 10.74 16 24s-7.16 24-16 24-16-10.74-16-24 7.16-24 16-24zm103.62 77.7c-15.25 15-35 23.3-55.62 23.3a78.37 78.37 0 01-55.66-23.34 8 8 0 0111.32-11.32A62.46 62.46 0 00256 213c16.39 0 32.15-6.64 44.39-18.7a8 8 0 0111.23 11.4zM304 176c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24z' />{' '}
    </Svg>
);

const IconMenu = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 512 512' color={color} x='0px' y='0px' {...props}>
        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='48' d='M88 152h336M88 256h336M88 360h336' />
    </Svg>
);

const IconChevronUp = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 512 512' color={color} x='0px' y='0px' {...props}>
        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='48' d='M112 328l144-144 144 144' />
    </Svg>
);

const IconAbout1 = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 70 70' color={color} {...props}>
        <g id='about-icon1' transform='translate(-387 -1205)'>
            <circle id='about-icon1-2' data-name='about-icon1' cx='35' cy='35' r='35' transform='translate(387 1205)' fill='#1f97d4' />
            <g id='sport' transform='translate(404 1222.928)'>
                <g id='Group_2' data-name='Group 2' transform='translate(8.393 8.366)'>
                    <g id='Group_1' data-name='Group 1'>
                        <path
                            id='Path_1'
                            data-name='Path 1'
                            d='M147.249,134.329l-2.29-2.29L146.8,130.2a1.08,1.08,0,1,0-1.527-1.527l-1.843,1.843-2.29-2.29a1.08,1.08,0,1,0-1.527,1.527l2.29,2.29-1.527,1.527-2.29-2.29a1.08,1.08,0,0,0-1.527,1.527l2.29,2.29-2.3,2.3-2.29-2.29a1.08,1.08,0,0,0-1.527,1.527l2.29,2.29-1.527,1.527-2.29-2.29a1.08,1.08,0,0,0-1.527,1.527l2.29,2.29-1.843,1.843a1.08,1.08,0,0,0,1.527,1.527L133.5,143.5l2.29,2.29a1.08,1.08,0,0,0,1.527-1.527l-2.29-2.29,1.527-1.527,2.29,2.29a1.08,1.08,0,0,0,1.527-1.527l-2.29-2.29,2.3-2.3,2.29,2.29a1.08,1.08,0,0,0,1.527-1.527l-2.29-2.29,1.527-1.527,2.29,2.29a1.08,1.08,0,0,0,1.527-1.527Z'
                            transform='translate(-129.368 -127.905)'
                            fill='#fff'
                        />
                    </g>
                </g>
                <g id='Group_4' data-name='Group 4' transform='translate(0 0.072)'>
                    <g id='Group_3' data-name='Group 3' transform='translate(0 0)'>
                        <path
                            id='Path_2'
                            data-name='Path 2'
                            d='M33.382,1.691C31.042-.65,25.187.013,21.872.808q-.225.054-.45.111A32.242,32.242,0,0,0,14.8,3.414a27.568,27.568,0,0,0-7,5.017A27.4,27.4,0,0,0,.771,21.053l-.139.573C-.18,25.154-.583,30.9,1.8,33.276c2.449,2.449,8.412,1.93,11.765,1.138a27.485,27.485,0,0,0,13.081-7.146,27.674,27.674,0,0,0,5.027-7,32.137,32.137,0,0,0,2.6-7.035C35.046,10.026,35.759,4.068,33.382,1.691ZM3.223,31.85c-.994-.994-1.6-4.083-.936-8.18L11.4,32.786C7.307,33.448,4.217,32.844,3.223,31.85Zm21.993-6.009A25.294,25.294,0,0,1,13.85,32.262L2.811,21.223A25.294,25.294,0,0,1,9.232,9.857a27.966,27.966,0,0,1,12.353-6.9L32.122,13.5A28,28,0,0,1,25.216,25.841Zm7.445-14.773L24.017,2.424a21.522,21.522,0,0,1,3.649-.338c2.152,0,3.675.417,4.289,1.032C32.883,4.045,33.367,7.01,32.661,11.068Z'
                            transform='translate(0 -0.072)'
                            fill='#fff'
                        />
                    </g>
                </g>
            </g>
        </g>
    </Svg>
);

const IconAbout2 = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 70 70' color={color} {...props}>
        <g id='about-icon2' transform='translate(-387 -1205)'>
            <circle id='about-icon2-2' data-name='about-icon2' cx='35' cy='35' r='35' transform='translate(387 1205)' fill='#fbce0f' />
            <g id='eco-friendly' transform='translate(347.996 1223)'>
                <g id='Group_5' data-name='Group 5' transform='translate(61.004 0)'>
                    <path
                        id='Path_3'
                        data-name='Path 3'
                        d='M86.638,4.1A19.779,19.779,0,0,1,75.2.371L74.9.173a1.023,1.023,0,0,0-1.138,0l-.294.2A19.494,19.494,0,0,1,62.029,4.1,1.025,1.025,0,0,0,61,5.128V16.9A19,19,0,0,0,74.009,34.947a1.019,1.019,0,0,0,.649,0A19,19,0,0,0,87.664,16.9V5.128A1.025,1.025,0,0,0,86.638,4.1ZM85.613,16.9A16.947,16.947,0,0,1,74.334,32.89,16.947,16.947,0,0,1,63.055,16.9V6.129A21.657,21.657,0,0,0,74.334,2.265,21.645,21.645,0,0,0,85.613,6.129ZM73.571,6.63c-.657.732-6.415,7.255-6.415,10.939a7.167,7.167,0,0,0,6.152,7.074v3.18a1.025,1.025,0,1,0,2.051,0v-3.18a7.167,7.167,0,0,0,6.152-7.074c0-3.684-5.758-10.207-6.415-10.939a1.059,1.059,0,0,0-1.526,0Zm5.89,10.939a5.135,5.135,0,0,1-4.1,5.023V17.569a1.025,1.025,0,0,0-2.051,0v5.023a5.135,5.135,0,0,1-4.1-5.023c0-1.955,2.888-6.033,5.127-8.69C76.573,11.535,79.461,15.612,79.461,17.569Z'
                        transform='translate(-61.004 0)'
                        fill='#fff'
                    />
                </g>
            </g>
        </g>
    </Svg>
);

const IconAbout3 = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 70 70' color={color} {...props}>
        <g id='about-icon3' transform='translate(-387 -1205)'>
            <circle id='about-icon3-2' data-name='about-icon3' cx='35' cy='35' r='35' transform='translate(387 1205)' fill='#12d9df' />
            <g id='video-recording' transform='translate(397 1222)'>
                <g id='Group_7' data-name='Group 7' transform='translate(8)'>
                    <g id='Group_6' data-name='Group 6'>
                        <path id='Path_4' data-name='Path 4' d='M104,176v12.738h15.923v-1.89l5.308,1.062V176.828l-5.308,1.062V176Zm19.108,3.418v5.9l-5.308-1.062v2.357H106.123v-8.492H117.8v2.357Z' transform='translate(-97.631 -164.323)' fill='#fff' />
                        <rect id='Rectangle_7' data-name='Rectangle 7' width='2' height='3' transform='translate(32 14)' fill='#fff' />
                        <rect id='Rectangle_8' data-name='Rectangle 8' width='2' height='2' transform='translate(32 19)' fill='#fff' />
                        <path id='Path_5' data-name='Path 5' d='M38.785,0h-27.6A3.185,3.185,0,0,0,8,3.185V31.846a3.185,3.185,0,0,0,3.185,3.185h27.6a3.185,3.185,0,0,0,3.185-3.185V23.354H39.846v8.492a1.062,1.062,0,0,1-1.062,1.062h-27.6a1.061,1.061,0,0,1-1.062-1.062V3.185a1.062,1.062,0,0,1,1.062-1.062h27.6a1.062,1.062,0,0,1,1.062,1.062v9.554h2.123V3.185A3.185,3.185,0,0,0,38.785,0Z' transform='translate(-8)' fill='#fff' />
                    </g>
                </g>
            </g>
        </g>
    </Svg>
);

const IconClose = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 16 16' color={color} {...props}>
        <path d='M8.94 7.99988L13.14 3.80655C13.2655 3.68101 13.3361 3.51075 13.3361 3.33321C13.3361 3.15568 13.2655 2.98542 13.14 2.85988C13.0145 2.73434 12.8442 2.66382 12.6667 2.66382C12.4891 2.66382 12.3189 2.73434 12.1933 2.85988L8 7.05988L3.80667 2.85988C3.68113 2.73434 3.51087 2.66382 3.33333 2.66382C3.1558 2.66382 2.98554 2.73434 2.86 2.85988C2.73446 2.98542 2.66394 3.15568 2.66394 3.33321C2.66394 3.51075 2.73446 3.68101 2.86 3.80655L7.06 7.99988L2.86 12.1932C2.79751 12.2552 2.74792 12.3289 2.71407 12.4102C2.68023 12.4914 2.6628 12.5785 2.6628 12.6665C2.6628 12.7546 2.68023 12.8417 2.71407 12.9229C2.74792 13.0042 2.79751 13.0779 2.86 13.1399C2.92198 13.2024 2.99571 13.252 3.07695 13.2858C3.15819 13.3197 3.24533 13.3371 3.33333 13.3371C3.42134 13.3371 3.50848 13.3197 3.58972 13.2858C3.67096 13.252 3.74469 13.2024 3.80667 13.1399L8 8.93988L12.1933 13.1399C12.2553 13.2024 12.329 13.252 12.4103 13.2858C12.4915 13.3197 12.5787 13.3371 12.6667 13.3371C12.7547 13.3371 12.8418 13.3197 12.9231 13.2858C13.0043 13.252 13.078 13.2024 13.14 13.1399C13.2025 13.0779 13.2521 13.0042 13.2859 12.9229C13.3198 12.8417 13.3372 12.7546 13.3372 12.6665C13.3372 12.5785 13.3198 12.4914 13.2859 12.4102C13.2521 12.3289 13.2025 12.2552 13.14 12.1932L8.94 7.99988Z' />
    </Svg>
);

const IconSuccess = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 32 32' color={color} {...props}>
        <path d='M19.6267 11.7201L13.9067 17.4534L11.7067 15.2534C11.5871 15.1138 11.44 15.0005 11.2746 14.9204C11.1092 14.8404 10.929 14.7954 10.7454 14.7884C10.5618 14.7813 10.3787 14.8122 10.2076 14.8792C10.0365 14.9463 9.88107 15.0479 9.75113 15.1779C9.62119 15.3078 9.51951 15.4632 9.45248 15.6343C9.38545 15.8054 9.35451 15.9885 9.3616 16.1722C9.36869 16.3558 9.41366 16.536 9.4937 16.7014C9.57373 16.8668 9.68709 17.0139 9.82666 17.1334L12.96 20.2801C13.0846 20.4037 13.2323 20.5014 13.3948 20.5678C13.5572 20.6341 13.7312 20.6678 13.9067 20.6667C14.2564 20.6653 14.5916 20.5264 14.84 20.2801L21.5067 13.6134C21.6316 13.4895 21.7308 13.342 21.7985 13.1795C21.8662 13.017 21.9011 12.8428 21.9011 12.6667C21.9011 12.4907 21.8662 12.3165 21.7985 12.154C21.7308 11.9915 21.6316 11.844 21.5067 11.7201C21.2568 11.4717 20.9189 11.3324 20.5667 11.3324C20.2144 11.3324 19.8765 11.4717 19.6267 11.7201ZM16 2.66675C13.3629 2.66675 10.785 3.44873 8.59239 4.91382C6.39974 6.37891 4.69077 8.46129 3.6816 10.8976C2.67243 13.334 2.40839 16.0149 2.92286 18.6013C3.43733 21.1877 4.70721 23.5635 6.57191 25.4282C8.43661 27.2929 10.8124 28.5627 13.3988 29.0772C15.9852 29.5917 18.6661 29.3276 21.1024 28.3185C23.5388 27.3093 25.6212 25.6003 27.0863 23.4077C28.5513 21.215 29.3333 18.6372 29.3333 16.0001C29.3333 14.2491 28.9885 12.5153 28.3184 10.8976C27.6483 9.27996 26.6662 7.81011 25.4281 6.57199C24.19 5.33388 22.7201 4.35175 21.1024 3.68169C19.4848 3.01162 17.751 2.66675 16 2.66675ZM16 26.6667C13.8903 26.6667 11.828 26.0412 10.0739 24.8691C8.31979 23.697 6.95262 22.0311 6.14528 20.082C5.33795 18.133 5.12671 15.9882 5.53829 13.9191C5.94986 11.85 6.96576 9.94937 8.45752 8.45761C9.94928 6.96585 11.8499 5.94995 13.919 5.53837C15.9882 5.1268 18.1329 5.33803 20.082 6.14537C22.031 6.9527 23.6969 8.31987 24.869 10.074C26.0411 11.8281 26.6667 13.8904 26.6667 16.0001C26.6667 18.8291 25.5429 21.5422 23.5425 23.5426C21.5421 25.5429 18.829 26.6667 16 26.6667Z' />
    </Svg>
);

const IconError = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 32 32' color={color} {...props}>
        <path d='M16 2.66675C13.3629 2.66675 10.785 3.44873 8.59239 4.91382C6.39974 6.37891 4.69077 8.46129 3.6816 10.8976C2.67243 13.334 2.40839 16.0149 2.92286 18.6013C3.43733 21.1877 4.70721 23.5635 6.57191 25.4282C8.43661 27.2929 10.8124 28.5627 13.3988 29.0772C15.9852 29.5917 18.6661 29.3276 21.1024 28.3185C23.5388 27.3093 25.6212 25.6003 27.0863 23.4077C28.5513 21.215 29.3333 18.6372 29.3333 16.0001C29.3333 14.2491 28.9885 12.5153 28.3184 10.8976C27.6483 9.27996 26.6662 7.81011 25.4281 6.57199C24.19 5.33388 22.7201 4.35175 21.1024 3.68169C19.4848 3.01162 17.751 2.66675 16 2.66675ZM16 26.6667C13.171 26.6667 10.4579 25.5429 8.45752 23.5426C6.45714 21.5422 5.33333 18.8291 5.33333 16.0001C5.33038 13.6312 6.12402 11.3301 7.58666 9.46675L22.5333 24.4134C20.6699 25.8761 18.3689 26.6697 16 26.6667ZM24.4133 22.5334L9.46666 7.58675C11.3301 6.1241 13.6311 5.33047 16 5.33341C18.829 5.33341 21.5421 6.45722 23.5425 8.45761C25.5429 10.458 26.6667 13.1711 26.6667 16.0001C26.6696 18.369 25.876 20.67 24.4133 22.5334Z' />
    </Svg>
);

const IconWarning = ({ color, size, ...props }) => (
    <Svg size={size} viewBox='0 0 32 32' color={color} {...props}>
        <path d='M16 14.6667C15.6464 14.6667 15.3072 14.8072 15.0572 15.0573C14.8071 15.3073 14.6667 15.6465 14.6667 16.0001V21.3334C14.6667 21.687 14.8071 22.0262 15.0572 22.2762C15.3072 22.5263 15.6464 22.6667 16 22.6667C16.3536 22.6667 16.6928 22.5263 16.9428 22.2762C17.1929 22.0262 17.3333 21.687 17.3333 21.3334V16.0001C17.3333 15.6465 17.1929 15.3073 16.9428 15.0573C16.6928 14.8072 16.3536 14.6667 16 14.6667ZM16.5067 9.44008C16.182 9.30672 15.8179 9.30672 15.4933 9.44008C15.3297 9.50354 15.1801 9.59869 15.0533 9.72008C14.9356 9.84968 14.8409 9.9985 14.7733 10.1601C14.6987 10.3183 14.6622 10.4918 14.6667 10.6667C14.6656 10.8422 14.6993 11.0162 14.7656 11.1786C14.832 11.3411 14.9298 11.4888 15.0533 11.6134C15.1829 11.7312 15.3317 11.8259 15.4933 11.8934C15.6953 11.9764 15.9146 12.0085 16.1319 11.9869C16.3492 11.9653 16.5579 11.8906 16.7396 11.7695C16.9213 11.6484 17.0705 11.4845 17.174 11.2922C17.2775 11.0999 17.3322 10.8851 17.3333 10.6667C17.3284 10.3137 17.1903 9.97559 16.9467 9.72008C16.8199 9.59869 16.6703 9.50354 16.5067 9.44008ZM16 2.66675C13.3629 2.66675 10.785 3.44873 8.59239 4.91382C6.39974 6.37891 4.69077 8.46129 3.6816 10.8976C2.67243 13.334 2.40839 16.0149 2.92286 18.6013C3.43733 21.1877 4.70721 23.5635 6.57191 25.4282C8.43661 27.2929 10.8124 28.5627 13.3988 29.0772C15.9852 29.5917 18.6661 29.3276 21.1024 28.3185C23.5388 27.3093 25.6212 25.6003 27.0863 23.4077C28.5513 21.215 29.3333 18.6372 29.3333 16.0001C29.3333 14.2491 28.9885 12.5153 28.3184 10.8976C27.6483 9.27996 26.6662 7.81011 25.4281 6.57199C24.19 5.33388 22.7201 4.35175 21.1024 3.68169C19.4848 3.01162 17.751 2.66675 16 2.66675ZM16 26.6667C13.8903 26.6667 11.828 26.0412 10.0739 24.8691C8.31979 23.697 6.95262 22.0311 6.14528 20.082C5.33795 18.133 5.12671 15.9882 5.53829 13.9191C5.94986 11.85 6.96576 9.94937 8.45752 8.45761C9.94928 6.96585 11.8499 5.94995 13.919 5.53837C15.9882 5.1268 18.1329 5.33803 20.082 6.14537C22.031 6.9527 23.6969 8.31987 24.869 10.074C26.0411 11.8281 26.6667 13.8904 26.6667 16.0001C26.6667 18.8291 25.5429 21.5422 23.5425 23.5426C21.5421 25.5429 18.829 26.6667 16 26.6667Z' />
    </Svg>
);

const Icons = ({ name, size, color, ...props }) => {
    const inputProps = { name, size, color, ...props };

    switch (name) {
        case 'IconLocation':
            return <IconLocation {...inputProps} />;

        case 'IconCall':
            return <IconCall {...inputProps} />;

        case 'IconMail':
            return <IconMail {...inputProps} />;

        case 'IconFacebook':
            return <IconFacebook {...inputProps} />;

        case 'IconTwitter':
            return <IconTwitter {...inputProps} />;

        case 'IconLinkedin':
            return <IconLinkedin {...inputProps} />;

        case 'IconSnapchat':
            return <IconSnapchat {...inputProps} />;

        case 'IconMenu':
            return <IconMenu {...inputProps} />;

        case 'IconAbout1':
            return <IconAbout1 {...inputProps} />;

        case 'IconAbout2':
            return <IconAbout2 {...inputProps} />;

        case 'IconAbout3':
            return <IconAbout3 {...inputProps} />;

        case 'IconChevronUp':
            return <IconChevronUp {...inputProps} />;

        case 'IconClose':
            return <IconClose {...inputProps} />;

        case 'IconSuccess':
            return <IconSuccess {...inputProps} />;

        case 'IconError':
            return <IconError {...inputProps} />;

        case 'IconWarning':
            return <IconWarning {...inputProps} />;

        default:
            break;
    }
};

export default Icons;
