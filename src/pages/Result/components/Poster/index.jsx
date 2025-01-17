import React from 'react'
import {
    first_bg,
    second_bg,
    third_bg,
    aikm,
    bottomElement,
    bottomElementOnstage,
    CreatorLogo,
    KalamaLogo,
    Kalaulsavm,
    resultTxt,
    resultTxtOnstage,
    rightElement,
    rightElementOnstage,
    sponserLogo,
    topElement,
    topElementOnstage
} from '@/assets/poster/index.js';

function index() {

    const data = {
        "programName": "Colorado Skinner",
        "id": "67753efe5637c2b3ca921678",
        "result_no": 3,
        "stageStatus": "off_stage",
        "is_group": false,
        "winners": [
            {
                "position": 1,
                "participants": [
                    {
                        "name": "salman",
                        "department": "Blossom Arts & Science College",
                        "year": 1
                    }
                ]
            },
            {
                "position": 2,
                "participants": [
                    {
                        "name": "Shamil",
                        "department": "EMEA College of Arts and Science",
                        "year": 2
                    }
                ]
            },
            {
                "position": 3,
                "participants": [
                    {
                        "name": "Aseel",
                        "department": "Blossom Arts & Science College 123",
                        "year": 2
                    }
                ]
            }
        ]
    }

    return (
        <div className='relative max-w-[600px] overflow-hidden w-full h-[600px] mx-auto'>
            <img src={topElementOnstage} alt="topElement" className='absolute top-0 left-0 w-full max-w-[150px]' />
            <img src={rightElementOnstage} alt="rightElement" className='absolute bottom-0 -right-0 h-[800px] z-10' />
            <img src={bottomElementOnstage} alt="bottomElement" className='absolute bottom-0 left-0 right-0 ' />


           
        </div>
    )
}

export default index
