export const learnDescription = `An artist of considerable range, Chet Faker — the name taken by
Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
and records all of his own music, giving it a warm, intimate
feel with a solid groove structure.`;

const lastSchool={
    contentStyle:{ background: 'rgb(224, 224, 224)', color: '#000', border:'1px solid rgb(255, 0, 0)'},
    contentArrowStyle:{ borderRight: '7px solid  rgb(255, 0, 0)' },
    iconStyle:{ background: 'rgb(255, 0, 0)', color: '#fff' }
}
const previousSchool={
    contentStyle:{ background: 'rgb(252, 252, 252)', color: '#000', border:'1px solid rgb(60, 22, 209)'},
    contentArrowStyle:{ borderRight: '7px solid  rgb(60, 22, 209)' },
    iconStyle:{ background: 'rgb(60, 22, 209)', color: '#fff' }
}

export const learns = [
    {
        school: 'Antony Conboy',
        major: 'UX/UI Design',
        location: 'Online',
        desc: `Basic UX and UI design for product`,
        ...lastSchool
    },
    {
        school: 'Udemy',
        major: 'DataStructure & Algorithms',
        location: 'Online',
        desc: `DataStructure & Algorithms`,
        ...lastSchool
    },
    {
        school: 'Udemy',
        major: 'React.js Web Development',
        location: 'Online',
        desc: `Web front-end development with React.js`,
        ...previousSchool
    },
    {
        school: 'Udemy',
        major: 'Web Development',
        location: 'Online',
        desc: `Baisc web front-end and back-end development with Express.js `,
        ...previousSchool
    },
    {
        school: 'QUT(Queensland University of Technology)',
        major: 'Information Technology',
        location: 'Australia',
        desc: `Software Development, Networking, Programming, DataStructure & Algorithms, Communication`,
        ...previousSchool
    },
]