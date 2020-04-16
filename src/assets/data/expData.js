//experience data
const lastJobStyle={
    contentStyle:{ background: 'rgb(224, 224, 224)', color: '#000', border:'1px solid rgb(60, 22, 209)' },
    contentArrowStyle:{ borderRight: '7px solid  rgb(60, 22, 209)' },
    iconStyle:{ background: 'rgb(60, 22, 209)', color: '#fff' }
}
const previousJobStyle={
    contentStyle:{ background: 'rgb(252, 252, 252)', color: '#000', border:'1px solid rgb(60, 22, 209)' },
    contentArrowStyle:{ borderRight: '7px solid  rgb(60, 22, 209)' },
    iconStyle:{ background: 'rgb(60, 22, 209)', color: '#fff' }
}
export const exps = [
    {
        company: 'JTIOT',
        title: 'Web Developer',
        location: 'Taiwan',
        desc: `Front end, Back end(API), Big Data Architecture Research, Web Maintenance`,
        ...lastJobStyle
    },
    {
        company: 'La Tortilla',
        title: 'Food Producer',
        location: 'Australia',
        desc: `Machine Operator, Food Processing, Packaging`,
        ...previousJobStyle
    },
    {
        company: 'JBS',
        title: 'Meat Processer',
        location: 'Australia',
        desc: `Meet Processing`,
        ...previousJobStyle
    },
    {
        company: 'AUCS',
        title: 'Farmer',
        location: 'Australia',
        desc: `See Planting, Plant Cutting and Maintenance`,
        ...previousJobStyle
    },
    {
        company: 'Artech',
        title: 'IOS Developer',
        location: 'Taiwan',
        desc: `IOS App development`,
        ...previousJobStyle
    },
    {
        company: 'Lucky',
        title: 'IOS game Developer',
        location: 'Taiwan',
        desc: `IOS game development`,
        ...previousJobStyle
    },
    {
        company: 'Freelancer',
        title: 'IOS and Web developer',
        location: 'Taiwan',
        desc: `IOS App and Web development`,
        ...previousJobStyle
    },
    {
        company: 'Wei Qiao',
        title: 'IOS Developer',
        location: 'Taiwan',
        desc: `IOS App development`,
        ...previousJobStyle
    },
    {
        company: 'Mobili Studio',
        title: 'IOS Developer',
        location: 'Taiwan',
        desc: `IOS App development`,
        ...previousJobStyle
    },
]

export const expDescription = `An artist of considerable range, Chet Faker — the name taken by
Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
and records all of his own music, giving it a warm, intimate
feel with a solid groove structure.`;