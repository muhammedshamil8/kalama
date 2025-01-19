import { useQuery } from '@tanstack/react-query';

const fetchLeaderboardData = async () => {
    const ApiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${ApiUrl}/results/leaderboard`);
    if (!response.ok) {
        throw new Error('Error fetching leaderboard data');
    }
    return response.json();
};

const fetchEventsData = async () => {
    const ApiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${ApiUrl}/events/resultPublished`);
    if (!response.ok) {
        throw new Error('Error fetching events data');
    }
    return response.json();
};

export const useFetchData = () => {
    const leaderboardQuery = useQuery(['leaderboard'], fetchLeaderboardData, {
        refetchInterval: 60000, // Refetch every 60 seconds (adjust as needed)
    });

    const eventsQuery = useQuery(['events'], fetchEventsData, {
        refetchInterval: 60000, // Refetch every 60 seconds (adjust as needed)
    });

    return { leaderboardQuery, eventsQuery };
};