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
        mdSrc: visualMusicMD
    },
    {
        title: 'eShop',
        mdSrc: eShopMD
    },
    {
        title: 'Face Detection',
        mdSrc: faceDetectionMD
    },
    {
        title: 'Finder E-Book',
        mdSrc: finderEBookMD
    },
    {
        title: 'Mobile Disk',
        mdSrc: mobileDiskMD
    },
    {
        title: 'Neat Converter',
        mdSrc: neatConverterMD
    },
    {
        title: 'Stiky Hive',
        mdSrc: stikyHiveMD
    },
    {
        title: 'Virtual Gift',
        mdSrc: virtualGiftMD
    },
    {
        title: 'Visual Traveling Checklist',
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
                content: mdText
            }
        })
    }
    catch(err){
        console.log(err);
    }
}

export const projectDescription = `An artist of considerable range, Chet Faker — the name taken by
Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
and records all of his own music, giving it a warm, intimate
feel with a solid groove structure.`;