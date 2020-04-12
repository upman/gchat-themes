import {
    getLogoContainer,
    replaceStyles,
    getIconSvgs,
} from './dom';

function switchLogoColor() {
    var logoContainer = getLogoContainer();
    // @ts-ignore
    logoContainer.style = 'fill: white;';
}

function switchIconsColor() {
    var iconSvgs = getIconSvgs();
    for(var idx = 0; idx < iconSvgs.length; idx += 1) {
        //@ts-ignore
        iconSvgs[idx].style = 'fill: rgb(216, 227, 235)';
    }
}

function carpetBombStyle() {
    replaceStyles({
        backgroundColor: [
            {
                // Thread Background
                from: 'rgb(255, 255, 255)',
                to: 'rgb(25, 39, 52)'
            },
            {
                // Extraneous background style on chat search
                from: 'rgba(255, 255, 255, 0.7)',
                to: 'rgb(25, 39, 52)'
            },
            {
                // Threads container background
                from: 'rgb(242, 242, 242)',
                to: 'rgb(21, 32, 43)',
            },
            {
                // Active chat title in sidebar
                from: 'rgb(228, 247, 251)',
                to: 'rgb(0, 0, 0)'
            },
            {
                // Hover Background
                from: 'rgb(248, 249, 250)',
                to: 'rgb(32, 48, 61)'
            },
            {
                // User's Mention
                from: 'rgb(0, 121, 107)',
                to: 'rgb(65, 173, 240)',
            },
            {
                // inline markdown
                from: 'rgb(250, 250, 250)',
                to: 'rgb(55, 86, 115)'
            },
            {
                // Add people + jump to bottom buttons
                from: 'rgb(26, 115, 232)',
                to: 'rgb(29, 161, 242)'
            },
            {
                // Number of members pill background
                from: 'rgb(241, 243, 244)',
                to: 'rgb(55, 86, 115)'
            },
            {
                // icons hover
                from: 'rgba(95, 99, 104, 0.08)',
                to: 'rgba(226, 230, 234, 0.14)'
            }
        ],
        background: {
            // Unnecessary gradient on Follow Button
            from: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255) 50%)',
            to: ''
        },
        backgroundImage: {
            // Unnecessary gradient on Follow Button
            from: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255) 50%)',
            to: ''
        },
        color: [
            {
                // Primary text
                from: 'rgb(32, 33, 36)',
                to: 'rgb(231, 232, 235)'

            },
            {
                // Secondary text
                from: 'rgb(95, 99, 104)',
                to: 'rgb(136, 153, 166)'
            },
            {
                // Alt Primary text Ex: Settings menu
                from: 'rgb(34, 34, 34)',
                to: 'rgb(231, 232, 235)'
            },
            {
                // dark icons
                from: 'rgba(0, 0, 0, 0.54)',
                to: [{
                    prop: 'color',
                    value: 'rgba(255, 255, 255, 0.54)'
                }, {
                    prop: 'fill',
                    value: 'rgba(255, 255, 255, 0.54)'
                }]
            },
            {
                // mentions
                from: 'rgb(0, 121, 107)',
                to: 'rgb(65, 173, 240)'
            },
            {
                // links
                from: 'rgb(26, 115, 232)',
                to: 'rgb(65, 173, 240)'
            },
            {
                // multiline markdown text
                from: 'rgb(66, 66, 66)',
                to: 'rgb(239, 239, 239)'
            },
            {
                // inline markdown text
                from: 'rgb(231, 232, 235)',
                to: 'rgb(245, 245, 245)'
            }
        ],
        borderColor: [
            {
                // Thread border
                from: 'rgb(218, 220, 224)',
                to: 'rgb(83, 102, 115)'
            },
            {
                // multiline markdown box border
                from: 'rgb(224, 224, 224)',
                to: 'rgb(71, 110, 146)'
            },
        ],
        borderBottom: [
            {
                // header bottom border
                from: '1px solid rgb(218, 220, 224)',
                to: '1px solid rgb(135, 143, 156)'
            }
        ],
        borderRight: [
            {
                // side bar right border
                from: '1px solid rgb(218, 220, 224)',
                to: '1px solid rgb(135, 143, 156)'
            }
        ],
        border: [
            {
                // inline markdown box
                from: '1px solid rgb(201, 201, 201)',
                to: '1px solid rgb(62, 97, 130)'
            }
        ],
        boxShadow: [
            {
                // Thread container on hover
                from: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                to: 'rgba(154, 190, 214, 0.5) 0px 1px 2px 0px, rgba(154, 190, 214, 0.25) 0px 1px 3px 1px'
            },
            {
                // TODO
                // Thread menu
                from: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                to: 'rgba(171, 185, 196, 0.3) 0px 1px 2px 0px, rgba(171, 185, 196, 0.15) 0px 2px 6px 2px'
            }
        ],
        fill: [
            {
                // logo
                from: 'rgb(0, 0, 0)',
                to: 'rgb(255, 255, 255)'
            },
            {
                // Dark logos
                from: 'rgb(32, 33, 36)',
                to: 'rgb(231, 232, 235)'
            }
        ]
    }, 1);

    replaceStyles({
        color: [{
            // mute notifications menu
            from: 'rgb(95, 99, 104)',
            to: 'rgb(172, 181, 191)'
        },
        {
            // Primary text
            from: 'rgb(32, 33, 36)',
            to: 'rgb(231, 232, 235)'

        },
        {
            // Secondary text
            from: 'rgb(95, 99, 104)',
            to: 'rgb(136, 153, 166)'
        },
        {
            // Alt Primary text Ex: Settings menu
            from: 'rgb(34, 34, 34)',
            to: 'rgb(231, 232, 235)'
        }
    ]}, 7);

    setTimeout(function() {
        // TODO
        replaceStyles({
            background: [
                {
                    // search bar active background
                    from: 'rgb(255, 255, 255)',
                    to: 'rgb(25, 39, 52)'
                },
                {
                    // account dialog managed by
                    from: 'rgb(232, 240, 254)',
                    to: 'rgb(43, 65, 86)'
                }
            ],
            backgroundColor: [
                {
                    // account dialog hover
                    from: 'rgb(247, 248, 248)',
                    to: 'rgb(32, 48, 61)'
                },
                {
                    // search bar active background
                    from: 'rgb(255, 255, 255)',
                    to: 'rgb(25, 39, 52)'
                },
            ],
            color: [
                {
                    // Primary text
                    from: 'rgb(32, 33, 36)',
                    to: 'rgb(231, 232, 235)'
                },
                {
                    // Primary text
                    from: 'rgb(60, 64, 67)',
                    to: 'rgb(231, 232, 235)'
                },
                {
                    // Secondary text
                    from: 'rgb(95, 99, 104)',
                    to: 'rgb(136, 153, 166)'
                },
            ],
            borderColor: [
                {
                    // borders on account drop down menu
                    from: 'rgb(218, 220, 224) rgb(218, 220, 224) rgb(135, 143, 156)',
                    to: 'rgb(135, 143, 156) rgb(135, 143, 156) rgb(135, 143, 156)'
                }
            ],
            borderBottom: [
                {
                    from: '1px solid rgb(218, 220, 224)',
                    to: '1px solid rgb(135, 143, 156)'
                }
            ]
        }, 9);
    }, 5000);
}

export const allOps = [
    switchLogoColor,
    switchIconsColor,
    carpetBombStyle
];
