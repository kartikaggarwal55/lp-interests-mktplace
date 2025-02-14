// components/Logo.tsx
import React from 'react'; // Import React
import { Anton } from 'next/font/google'; // <-- Import the Anton font from next/font/google

// Configure the Anton font with your desired options (using the latin subset)
const anton = Anton({ subsets: ['latin'], weight: '400' }); // <-- Added weight property

// Define your Logo component using TypeScript's React.FC
const Logo: React.FC = () => { // <-- React.FC provides type definitions for functional components
    return (
        // Use the generated className from the Anton font for styling
        <h1 className={`${anton.className} text-3xl font-bold text-center`}>
            GPLP {/* <-- Replace "YourBrandName" with your actual brand name */}
        </h1>
    );
};

export default Logo; // <-- Export the Logo component for use in other parts of your app
