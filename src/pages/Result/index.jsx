import React, { useState, useEffect } from 'react';
import Header from '@/components/ui/Header';
import { SearchIcon } from '@/assets/icons';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Share2, Download, Loader } from 'lucide-react'
import html2canvas from 'html2canvas';
import ReactGA from "react-ga4";
import Poster from './components/Poster';

function Index() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [programs, setPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPoster, setLoadingPoster] = useState(true);

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${ApiUrl}/events/resultPublished`);
        const data = await response.json();
        console.log(data);
        setPrograms(data?.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm !== '') {
      const filteredProgram = programs.filter((program) => program.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredPrograms(filteredProgram);
    } else if (searchTerm === '') {
      setFilteredPrograms(programs);
    }

  }, [searchTerm, programs]);

  const handleProgramSelect = async (program) => {
    setSelectedProgram(program);
    setLoadingPoster(true);
    try {
      const response = await fetch(`${ApiUrl}/result/event/${program._id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch program data');
      }

      const { data } = await response.json();
      console.log(data);

      const formattedData = data.map((program) => ({
        programName: program.name,
        id: program._id,
        result_no: program.serial_number,
        stageStatus: program.is_onstage ? 'on_stage' : 'off_stage',
        is_group: program.winningRegistrations[0].eventRegistration.group_name ? true : false,
        winners: program.winningRegistrations.reduce((acc, winner) => {
          const existingPosition = acc.find((w) => w.position === winner.position);

          // Determine the display format for the winner (group or individuals)
          // console.log(winner.eventRegistration);
          const winnerDetails = winner.eventRegistration.group_name
            ? {
              groupName: winner.eventRegistration.group_name,
              departmentName: winner.eventRegistration.departmentGroup
            }
            : {
              participants: winner.eventRegistration.participants.user.map((participant) => ({
                name: participant.name,
                department: participant.college,
                year: participant.year_of_study,
              })),
            };

          if (existingPosition) {
            // Add winner details to the existing position group
            if (winnerDetails.groupName) {
              existingPosition.groups = existingPosition.groups || [];
              existingPosition.groups.push({
                name: winnerDetails.groupName,
                team: winnerDetails.departmentName,
              });
            } else {
              existingPosition.participants.push(...winnerDetails.participants);
            }
          } else {
            // Create a new group for this position
            acc.push({
              position: winner.position,
              ...(winnerDetails.groupName
                ? {
                  groups: [{
                    name: winnerDetails.groupName,
                    team: winnerDetails.departmentName,
                  }]
                }
                : { participants: winnerDetails.participants }),
            });
          }
          return acc;
        }, []).sort((a, b) => a.position - b.position),
      }));

      setSelectedProgram(formattedData[0]);
      setIsDialogOpen(true);
      console.log(formattedData[0]);
      // console.log(formattedData[0]);
      // console.log(program)
      // setLoadingPoster(false);
    } catch (error) {
      console.error('Failed to select program', error);
      // setLoadingPoster(false);
    } finally {
      setLoadingPoster(false);
    }
  };

  const isNewRelease = (dateString) => {
    const currentDate = new Date();
    const programDate = new Date(dateString);

    // Calculate the difference in hours
    const timeDifference = Math.abs(currentDate - programDate) / (1000 * 60 * 60);

    return timeDifference <= 30; // Returns true if within 24 hours
  };

  const handleOpenChange = () => {
    setIsDialogOpen(!isDialogOpen);
  }


  const handleDownload = () => {
    const poster = document.getElementById('resultPosterId');
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Download result",
    });
<<<<<<< HEAD
    html2canvas(poster,
      {
        scale: 10, // Increase the scale for higher resolution (default is 1)
        useCORS: true
      }).then((canvas) => {
        const imageUrl = canvas.toDataURL('image/png'); // Create image URL from canvas
        setImageUrl(imageUrl);
        const link = document.createElement('a'); // Create a temporary link element
        link.href = imageUrl;
        if (selectedProgram) {
          link.download = `${selectedProgram.programName}-result.png`; // Set the download attribute to the program name
        } else {
          link.download = 'poster.png';
        }
        link.click();
      });
=======
    html2canvas(poster, {scale: 3}).then((canvas) => {
      const imageUrl = canvas.toDataURL('image/png'); // Create image URL from canvas
      setImageUrl(imageUrl);
      const link = document.createElement('a'); // Create a temporary link element
      link.href = imageUrl;
      if (selectedProgram) {
        link.download = `${selectedProgram.programName}-result.png`; // Set the download attribute to the program name
      } else {
        link.download = 'poster.png';
      }
      link.click();
    });
>>>>>>> 525a52fa31273f0ce8e547fb890f389c86b272e9
  };


  const handleShare = async () => {
    const poster = document.getElementById('resultPosterId');
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Share now result",
    });
    // Capture the content of the element as a canvas
<<<<<<< HEAD
    html2canvas(poster,
      {
        scale: 10, // Increase the scale for higher resolution (default is 1)
        useCORS: true
      }).then((canvas) => {
        // Convert the canvas to a Blob
        canvas.toBlob(async (blob) => {
          if (!blob) return;
=======
    html2canvas(poster, {scale: 3}).then((canvas) => {
      // Convert the canvas to a Blob
      canvas.toBlob(async (blob) => {
        if (!blob) return;
>>>>>>> 525a52fa31273f0ce8e547fb890f389c86b272e9

          // Create a File object from the Blob
          const file = new File([blob], 'poster.png', { type: 'image/png' });

          // Check if the Web Share API supports file sharing
          if (navigator.share) {
            try {
              // Share the image as a file
              await navigator.share({
                title: "Artify",
                url: 'https://czonekalama.in',
                text: "Check out the winners! 🎉",
                files: [file], // Pass the image file
              });
              // console.log('Shared successfully!');
            } catch (err) {
              console.error('Error sharing:', err);
            }
          } else {
            console.warn('Web Share API not supported or file sharing not supported');
            alert('Sorry, file sharing is not supported on your device please download the image and share it manually');
          }
        });
      });
  };

  const colors = ['#3592BA', '#00A99D', '#8DC63F', '#FF5733', '#FFC300'];


  return (
    <div className='w-full p-4'>
      <Header title="Results" href="/" />
      <section className='max-w-[700px] mx-auto'>
        <div className='mt-10'>
          {/* Search Box */}
          <div className="flex items-center justify-center w-full p-2 border border-gray-800 shadow-sm max-w-[400px] mx-auto focus-within:border-blue-500 focus-within:shadow-md">
            <img src={SearchIcon} alt="Search Icon" className="w-6 h-6" />
            <input
              type="text"
              placeholder="Search programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ring-0 focus:ring-0 focus:outline-none w-full pl-2"
            />
          </div>

        </div>

        {/* Program List */}
        <div className='mt-10 w-full mx-auto'>
          <div className='flex flex-wrap gap-4 items-center justify-center w-full mx-auto'>
            {!loading ? (
              <>
                {filteredPrograms.length > 0 ? (
                  filteredPrograms.map((program, index) => (
                    <button
                      onClick={() => handleProgramSelect(program)}
                      key={index}
                      style={{ backgroundColor: colors[index % colors.length] }}
                      className='bg-[#605F5F] border-[2px] cursor-pointer border-b-[4px] border-borderColor px-4 py-1 text-white font-semibold  rounded-none shadow-md flex items-center justify-center leading-5'
                    >
                      {program?.name}
                    </button>
                  ))
                ) : (
                  <p className='text-gray-500'>No programs found.</p>
                )}
              </>
            ) : (
              <div className='flex items-center justify-center w-full py-6'>
                <Loader className='animate-spin' />
              </div>
            )}
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="max-h-[90vh] min-h-fit overflow-y-auto p-0 scale-100 lg:scale-125">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
            <div className='pb-4'>
              <div className='min-h-[400px]'>
                {loadingPoster ? (
                  <div className='flex items-center justify-center py-4'>
                    <Loader className='animate-spin' />
                  </div>
                ) : (
                  <div className='flex items-center justify-center pt-6'>
                    <div className='w-fit h-fit' id='resultPosterId'>
                      <Poster />
                    </div>
                  </div>
                )}

                <div className='flex items-center justify-center gap-2 mt-4 max-w-[300px] mx-auto'>
                  <button onClick={handleShare} className='flex flex-1 text-center justify-center items-center gap-1 border-2 border-borderColor px-2 py-1 hover:bg-black hover:text-white transition-all ease-in-out duration-300' ><Share2 className='w-4 h-4' /><p className='font-semibold'>Share</p></button>
                  <button onClick={handleDownload} className='flex flex-1 text-center justify-center items-center gap-1 border-2 border-borderColor px-2 py-1 hover:bg-black hover:text-white transition-all ease-in-out duration-300' > <Download className='w-4 h-4' /><p className='font-semibold'>Download</p></button>
                </div>
              </div>

            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>


      {/* <Poster /> */}
    </div >
  );
}

export default Index;
