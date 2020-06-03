import React, {useState} from 'react';

//import from material-ui core
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ListPanel = ({panelList}) => {

    const [expand, setExpand] = useState('');

    const handlePanelExpand = panelName=>{
        if(expand === panelName){
            setExpand('');
        }
        else{
            setExpand(panelName);
        }
        
    }

    return (
            <div>
            {
                panelList?
                panelList.map((panel, index)=>{
                    return (
                        <ExpansionPanel
                        key={index}
                        expanded={expand === `panel${index+1}`} 
                        onChange={()=>handlePanelExpand(`panel${index+1}`)}>
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography variant='h5'>{panel.summary}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails
                            >
                                <Typography variant='h5'>{panel.detail}</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        
                    ); 
                })
                :
                null
            }
            </div>
    );
}

export default ListPanel;