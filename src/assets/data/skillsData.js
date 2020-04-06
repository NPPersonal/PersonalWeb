import javascriptLogo from 'assets/img/lang-logo/javascript.png';
import swiftLogo from 'assets/img/lang-logo/swift.png';
import objcLogo from 'assets/img/lang-logo/objc.png';
import csharpLogo from 'assets/img/lang-logo/csharp.png';
import othersLogo from 'assets/img/lang-logo/others.png';

const programmingLangs = {
    title: 'Programming languages',
    content: [
    'JavaScript',
    'Swift',
    'Objective-C',
    'HTML',
    'CSS',
    'C#',
    'Java',
    'C++'
    ]
};

const frameworks = {
    title: 'Frameworks',
    content: [
    'Node.js',
    'React.js',
    'Redux.js',
    'Express.js',
    'IOS MVC',
    'CodeIgniter'
    ]
};

const packageManagements = {
    title: 'Package Management',
    content: [
    'NPM',
    'CocoaPods',
    ]
};

const versionControls = {
    title: 'Version Control',
    content: [
    'Git',
    'GitHub',
    'Bitbucket'
    ]
};

export const skillList = [
    programmingLangs,
    frameworks,
    packageManagements,
    versionControls
]
export const programLangs = [
    {
        title: 'JavaScript',
        imageSource: javascriptLogo,
        frameworks: [
            'Express.js',
            'React.js',
            'Redux.js',
        ]
    },
    {
        title: 'Swift',
        imageSource: swiftLogo,
        frameworks: [
            'IOS'
        ]
    },
    {
        title: 'Objective-C',
        imageSource: objcLogo,
        frameworks: [
            'IOS'
        ]
    },
    {
        title: 'C#',
        imageSource: csharpLogo,
        frameworks: [
            'Unity3D'
        ]
    },
    {
        title: 'Others',
        imageSource: othersLogo,
        frameworks: [
            'SQL',
            'HTML',
            'CSS',
            'C++',
        ]
    },
    
]

export const skillDescription = `An artist of considerable range, Chet Faker — the name taken by
Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
and records all of his own music, giving it a warm, intimate
feel with a solid groove structure.`;

