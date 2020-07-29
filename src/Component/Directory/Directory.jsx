import React from 'react';
import './Directory.scss';
import DirectoryItem from '../DirectoryItem/DirectoryItem';
import MyDoctor from '../../assets/healthcare-medical-concept-medicine-doctor-with-stethoscope-hand-patients-come_34200-313.jpg';
import Drugs from '../../assets/thumb-1920-513905.jpg';
class Directory  extends React.Component
{
    constructor()
    {
    super();
        this.state={
            sections :[
                {title:'MyDoctor',
                imageurl:MyDoctor,
                id:1,
                

                },
                {title:'Drugs',
                imageurl:Drugs,
                id:2
                }
            ]
        }

    }
    render(){
        return(
    <div className='container' >
        {
            this.state.sections.map(({id,...otherSectionsProps})=>
            (   
                <DirectoryItem key={id}{...otherSectionsProps}/>
            ))}
        </div>
        );
    }
}
export default Directory;