//work exp markdown
import jtiotMD from 'assets/markdownSrc/experience/jtiot.md';
import artechMD from 'assets/markdownSrc/experience/artech.md'
import luckyMD from 'assets/markdownSrc/experience/lucky.md';
import weiQiaoMD from 'assets/markdownSrc/experience/wei-qiao.md';
import mobiliStudioMD from 'assets/markdownSrc/experience/mobili-studio.md'

//experience data
const experiences = [
    {
        title: 'JTIOT',
        mdSrc: jtiotMD
    },
    {
        title: 'Artech',
        mdSrc: artechMD
    },
    {
        title: 'Lucky',
        mdSrc: luckyMD
    },
    {
        title: 'Wei Qiao',
        mdSrc: weiQiaoMD
    },
    {
        title: 'Mobili Studio',
        mdSrc: mobiliStudioMD
    }
]

export const getExperiences = async () => {
    const mdSrcs = experiences.map(exp=>{
        return fetch(exp.mdSrc)
        .then(res=>res.text())
        .catch(err=>console.log(err));
    });

    try{
        const res = await Promise.all(mdSrcs);
        return res.map((mdText, index)=>{
            return {
                title: experiences[index].title,
                content: mdText
            }
        })
    }
    catch(err){
        console.log(err);
    }
}

//experience data
const lastJobStyle={
    contentStyle:{ background: 'rgb(224, 224, 224)', color: '#000' },
    contentArrowStyle:{ borderRight: '7px solid  rgb(224, 224, 224)' },
    iconStyle:{ background: 'rgb(60, 22, 209)', color: '#fff' }
}
const previousJobStyle={
    contentStyle:{ background: 'rgb(252, 252, 252)', color: '#000' },
    contentArrowStyle:{ borderRight: '7px solid  rgb(252, 252, 252)' },
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