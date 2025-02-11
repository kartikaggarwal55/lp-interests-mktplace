"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const LogoutButton: React.FC = () => {
    const handleLogout = (): void => {
        // Optionally, if you want to also log the user out of their Google session,
        // you can uncomment the following line. Note that this will sign the user out of Google globally.
        // window.location.href = "https://accounts.google.com/Logout"; // <-- Optional: Force Google logout

        // Logout from Auth0 using federated logout. This clears the Auth0 session.
        // The full page reload ensures that the logout process is properly executed.
        window.location.href = "/api/auth/logout?federated&returnTo=/"; // <-- Generally accepted Auth0 logout
    };

    return (
        <Button
            variant="default"
            size="sm"
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white rounded-full hover:shadow-sm active:shadow-md p-4 px-6"
        >
            Logout
        </Button>
    );
};

export default LogoutButton;
