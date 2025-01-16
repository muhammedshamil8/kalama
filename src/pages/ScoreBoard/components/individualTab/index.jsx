import { Star, pradhiba, BgRank, Empty } from '@/assets/elements';
import classNames from 'classnames';
import { college } from '@/assets/icons';
import { useState } from 'react';

function IndividualTab({ data }) {
    const [expandedCategories, setExpandedCategories] = useState({});

    // Toggle expand/collapse for a specific category
    const toggleExpand = (index) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle the expanded state for this category
        }));
    };

    return (
        <div className="p-3 mt-10">
            {data.map((category, index) => {
                // Only proceed if winners exist in the category
                if (category.winners.length === 0) return null;

                const isExpanded = expandedCategories[index];
                const topScorer = category.winners[0];
                const otherWinners = category.winners.slice(1);
                const winnersToShow = isExpanded ? category.winners : [topScorer];

                return (
                    <div key={index} className="mb-8">
                        {winnersToShow.length > 0 && (
                            <>
                                {/* Render Top Scorer and Others (if expanded) */}
                                {winnersToShow.map((individual, individualIndex) => (
                                    <div
                                        key={individualIndex}
                                        className="border-b-[4px] border-b-[#00A99D] max-w-[380px] mx-auto mb-4"
                                    >
                                        <div className="border rounded-none border-[#000] flex items-center flex-col gap-2 relative p-2">
                                            <img src={Star} alt="Star" className="absolute -top-2 right-3" />
                                            <img src={pradhiba} alt="Pradhiba" className="absolute bottom-0" />
                                            {/* Category Title Inside Card */}
                                            {individualIndex === 0 && (
                                                <h3 className="text-lg font-bold text-gray-800 text-center">
                                                    {category?.title}
                                                </h3>
                                            )}
                                            <div className="flex flex-1 w-full justify-around">
                                                <div className="h-24 w-20 bg-gray-300">
                                                    <img
                                                        src={individual?.image}
                                                        alt={individual?.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <div className="">
                                                        <p className="font-semibold text-xl">{individual?.name}</p>
                                                        <p className="text-sm">{individual?.college}</p>
                                                    </div>
                                                    <hr className="border-[1.5px] border-black mb-1" />
                                                    <div className="flex items-end justify-end">
                                                        <span className="flex items-center justify-center px-2 py-[1px] bg-[#00A99D] text-white font-bold rounded-none border border-black">
                                                            {individual?.points} Pts
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Show More Button */}
                                {otherWinners.length > 0 && (
                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className="block mx-auto px-4 py-2 bg-[#00A99D] text-white font-bold rounded mt-2"
                                    >
                                        {isExpanded ? 'Show Less' : `Show More (${otherWinners.length} more)`}
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
}


export default IndividualTab;