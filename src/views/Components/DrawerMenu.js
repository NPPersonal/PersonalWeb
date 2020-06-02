import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import InboxIcon from '@material-ui/icons/MoveToInbox';

const DrawerMenu = ({
    onSelectItem,
    menuData
}) => {

    const renderMenu = ()=>{
        const menu = [];

        for(let i=0; i<menuData.length; i++){
            if(i>0) menu.push(<Divider key={`divider${i}`} />);

            const section = menuData[i];
            const sectionIndex = i;
            const sectionTitle = section.title;
            const itemContents = section.items;

            menu.push(
                <List key={`${sectionTitle}${sectionIndex}`}>
                {
                    itemContents.map((item, i)=>{
                        return (
                        <ListItem 
                        button 
                        key={`${sectionTitle}${sectionIndex}${i}`}
                        onClick={()=>handleSelectItem(sectionIndex, i)}
                        >
                        {item}
                        </ListItem>
                        )
                    })
                }
                </List>
            );
        }

        return menu;
    }

    const handleSelectItem = (sectionIndex, itemIndex)=>{
        console.log(sectionIndex, itemIndex);
        if(onSelectItem) onSelectItem(sectionIndex, itemIndex);
    }
    return (
        <div>
        {renderMenu()}
        </div>
    );
};

export default DrawerMenu;