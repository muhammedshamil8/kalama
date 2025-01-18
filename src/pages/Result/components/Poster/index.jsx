import React from "react";
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
    topElementOnstage,
} from "@/assets/poster/index.js";

function index({ data }) {
    // const data = {
    //     "programName": "Colorado Skinner",
    //     "id": "67753efe5637c2b3ca921678",
    //     "result_no": 3,
    //     "stageStatus": "off_stage",
    //     "is_group": false,
    //     "winners": [
    //         {
    //             "position": 1,
    //             "participants": [
    //                 {
    //                     "name": "salman",
    //                     "department": "Blossom Arts & Science College",
    //                     "year": 1
    //                 },
    //             ]
    //         },
    //         {
    //             "position": 2,
    //             "participants": [
    //                 {
    //                     "name": "Shamil",
    //                     "department": "EMEA College of Arts and Science",
    //                     "year": 2
    //                 },
    //             ]
    //         },
    //         {
    //             "position": 3,
    //             "participants": [
    //                 {
    //                     "name": "Aseel",
    //                     "department": "Blossom Arts & Science College 123",
    //                     "year": 2
    //                 },
    //             ]
    //         }
    //     ]
    // }

    const getPosition = (position) => {
        switch (position) {
            case 1:
                return first_bg;
            case 2:
                return second_bg;
            case 3:
                return third_bg;
            default:
                return first_bg;
        }
    };

    function getTotalParticipants(data) {
        if (!data.winners || !Array.isArray(data.winners)) {
            return 0; // Return 0 if there's no valid winners array
        }

        return data.winners.reduce((total, winner) => {
            if (winner.participants && Array.isArray(winner.participants)) {
                total += winner.participants.length;
            }
            return total;
        }, 0);
    }

    const totalParticipants = getTotalParticipants(data);

    return (
        <div
            className={`relative flex items-center flex-col w-[350px] mx-auto overflow-y-hidden`}
            style={{
                height: `${300 + totalParticipants * 40}px`,
            }}
        >
            <img
                src={topElementOnstage}
                alt="topElement"
                className="absolute top-0 left-0 w-full max-w-[70px]"
            />
            <img
                src={rightElementOnstage}
                alt="rightElement"
                className="absolute bottom-0 -right-0 z-10 max-w-[50px]"
            />
            <img
                src={bottomElementOnstage}
                alt="bottomElement"
                className="absolute bottom-0 left-0 right-0 w-full "
            />

            <div className="bg-yellow-400 absolute top-48 -left-2 right-0 bottom-0 w-10 h-10 blur-2xl rounded-full "></div>
            <div className="bg-orange-400 absolute  left-2/4 right-0 bottom-0 w-10 h-10 blur-2xl rounded-full "></div>
            <div className="bg-violet-500 absolute  -top-5 right-1/4 w-14 h-14 blur-2xl rounded-full "></div>

            <img className="w-20 pt-10" src={aikm} alt="" />
            <div className="pt-1 flex items-end">
                <img src={Kalaulsavm} alt="" className="w-28 " />
                <img src={KalamaLogo} alt="" className="w-8" />
            </div>
            <div className="flex items-end relative">
                <img src={resultTxtOnstage} alt="" className="w-24 pt-4" />
                <div className="bg-orange-500 absolute right-0 h-4 w-4 rounded-full flex items-center justify-center text-white font-bold text-[6px]">
                    <span>{String(data.result_no).padStart(3, "0")}</span>
                </div>
            </div>
            <div className="bg-[#220440] text-white px-2  mt-3">
                <span className="text-[14px] font-semibold">{data.programName}</span>
            </div>
            <div className="mt-3 space-y-4">
                {data.winners.map((winner, index) => (
                    <div className="flex" key={index}>
                        <div className="relative h-fit">
                            <img src={getPosition(winner.position)} alt="" className="w-7" />
                            <span className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-[10px] text-white font-semibold">
                                {winner.position}
                            </span>
                        </div>
                        <div className="pl-2 space-y-1">
                            {winner.participants.map((participant, index) => (
                                <div key={index} className="text-left">
                                    <p className="text-[16px] font-bold leading-none">
                                        {participant.name}
                                    </p>
                                    <p className="text-[8px] line-clamp-1">
                                        {participant.department.slice(0, 36) + "..."}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between w-full px-16 mt-10">
                <img src={CreatorLogo} alt="" className="w-8" />
                <img src={sponserLogo} alt="" className="w-8" />
            </div>
        </div>
    );
}

export default index;
