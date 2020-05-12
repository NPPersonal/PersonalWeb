import visualMusicMD from 'assets/markdownSrc/project/visualMusic.md';
import eShopMD from 'assets/markdownSrc/project/e-commerce-shop.md';
import faceDetectionMD from 'assets/markdownSrc/project/face-detection.md';
import finderEBookMD from 'assets/markdownSrc/project/finderEbook.md';
import mobileDiskMD from 'assets/markdownSrc/project/mobileDisk.md';
import neatConverterMD from 'assets/markdownSrc/project/neat-converter.md';
import stikyHiveMD from 'assets/markdownSrc/project/stikyHive.md';
import virtualGiftMD from 'assets/markdownSrc/project/virtualGift.md';
import vtcMD from 'assets/markdownSrc/project/visual-traveling-checklist.md';

const projects = [
    {
        title: 'Visual Music',
        brief: `
        Not only enjoy your music by ears but also 
        look your music dancing on web.
        `,
        mdSrc: visualMusicMD
    },
    {
        title: 'eShop',
        brief: `
        A e-commerce web app for clothes shopping.
        `,
        mdSrc: eShopMD
    },
    {
        title: 'Face Detection',
        brief: `
        Detect human face appear in photo.
        `,
        mdSrc: faceDetectionMD
    },
    {
        title: 'Finder E-Book',
        brief: `
        Electronic book in your phone.
        `,
        mdSrc: finderEBookMD
    },
    {
        title: 'Mobile Disk',
        brief: `
        Turn your personal mobile phone into 
        a disk to store everything you need.
        `,
        mdSrc: mobileDiskMD
    },
    {
        title: 'Neat Converter',
        brief: `
        Convert between different units on your phone 
        easily.
        `,
        mdSrc: neatConverterMD
    },
    {
        title: 'Stiky Hive',
        brief: `
        Looking for person whoes skill is in your need on your phone. 
        `,
        mdSrc: stikyHiveMD
    },
    // {
    //     title: 'Virtual Gift',
    //     brief: `
    //     Send a virtual gift to your friend on your phone. 
    //     `,
    //     mdSrc: virtualGiftMD
    // },
    {
        title: 'Visual Traveling Checklist',
        brief: `
        Organize everyting your need for your trip on 
        your phone. 
        `,
        mdSrc: vtcMD
    },
]

export const getProjects = async () => {
    const mdSrcs = projects.map(exp=>{
        return fetch(exp.mdSrc)
        .then(res=>res.text())
        .catch(err=>console.log(err));
    });

    try{
        const res = await Promise.all(mdSrcs);
        return res.map((mdText, index)=>{
            return {
                title: projects[index].title,
                brief: projects[index].brief,
                content: mdText
            }
        })
    }
    catch(err){
        console.log(err);
    }
}

export const projectDescription = `Projects that I had worked on, no matter
it is personal, copmany or open source`;