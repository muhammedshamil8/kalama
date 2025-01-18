import React, { useEffect, useState } from 'react';
import CollegeTab from './components/collegeTab';
import IndividualTab from './components/individualTab';
import { Logo_aikiam, Logo_kalama, Logo_kaloolsavm, Logo_GloryBoard } from "@/assets/logos";
import PosterTab from './components/PosterTab';
import { Avatar_bl, Avatar_br } from '@/assets/elements';


function Index() {
    const [colleges, setColleges] = useState([]);
    const [individuals, setIndividuals] = useState([]);
    const [loading, setLoading] = useState(true);
    const ApiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${ApiUrl}/results/leaderboard`);
                const data = await response.json();

                const sortedColleges = data.data.results.sort((a, b) => b.totalScore - a.totalScore);
                setColleges(sortedColleges);

                const formattedData = [
                    {
                        title: 'Kalaprathiba',
                        winners: data.data.genderTopScorers
                            .filter((scorer) => scorer.gender === 'male')[0].topScorers
                            .map((scorer) => ({
                                name: scorer.name,
                                image: scorer.image,
                                college: scorer.college,
                                points: scorer.score,
                            }))
                            .sort((a, b) => b.points - a.points),
                    },
                    {
                        title: 'Kalathilakam',
                        winners: data.data.genderTopScorers
                            .filter((scorer) => scorer.gender === 'female')[0].topScorers
                            .map((scorer) => ({
                                name: scorer.name,
                                image: scorer.image,
                                college: scorer.college,
                                points: scorer.score,
                            }))
                            .sort((a, b) => b.points - a.points),
                    },
                    {
                        title: 'Sahithyaprathiba',
                        winners: data.data.categoryTopScorers
                            .filter((scorer) => scorer.category === 'saahithyolsavam')[0].topScorers
                            .map((scorer) => ({
                                name: scorer.name,
                                image: scorer.image,
                                college: scorer.college,
                                points: scorer.score,
                            }))
                            .sort((a, b) => b.points - a.points),
                    },
                    {
                        title: 'Chithrapradhiba',
                        winners: data.data.categoryTopScorers
                            .filter((scorer) => scorer.category === 'chithrolsavam')[0].topScorers
                            .map((scorer) => ({
                                name: scorer.name,
                                image: scorer.image,
                                college: scorer.college,
                                points: scorer.score,
                            }))
                            .sort((a, b) => b.points - a.points),
                    },
                ];

                setIndividuals(formattedData);


            } catch (error) {
                console.error('Error fetching leaderboard data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="w-full">
            <section className='w-full  mx-auto mt-10 px-4'>
                <div className='flex justify-between items-center max-w-[2600px] mx-auto p-10'>

                    <div className='flex gap-1 items-center justify-center h-fit w-fit'>
                        <div>
                            <img src={Logo_kalama} alt="Kalama Logo" className="mx-auto max-w-[180px]" />
                        </div>
                        <div className='grid gap-10 h-full'>
                            <img src={Logo_aikiam} alt="Aikiam Logo" className="mx-auto min-h-[45px]" />
                            <img src={Logo_kaloolsavm} alt="Kaloolsavm Logo" className="mx-auto min-h-[130px] flex-1" />
                        </div>
                    </div>
                    <div>
                        <img src={Logo_GloryBoard} alt="Product Logo" className="mx-auto max-w-[180px]" />
                    </div>
                </div>
                <mian className="flex justify-between items-center w-full mt-10">
                    <section className='w-full max-w-[900px] mt-10 px-4'>
                        <div className="flex justify-center w-full  mx-auto   sm:px-0">
                            <CollegeTab data={colleges} />
                        </div>
                    </section>
                    <section className='w-full max-w-[900px] mt-10 px-4'>
                        <div className="flex justify-center w-full  mx-auto   sm:px-0">
                            <PosterTab />
                        </div>
                    </section>
                    <section className='w-full max-w-[900px] mt-10 px-4'>
                        <div className="flex justify-center w-full  mx-auto   sm:px-0">
                            <IndividualTab data={individuals} />
                        </div>
                    </section>
                </mian>

            </section>

                <img src={Avatar_bl} alt="Bottom Left Avatar" className="absolute bottom-0 left-0 w-full max-w-[600px]" />
                <img src={Avatar_br} alt="Bottom Right Avatar" className="absolute bottom-0 right-0 w-full max-w-[600px]" />

        </div>
    );
}

export default Index;
