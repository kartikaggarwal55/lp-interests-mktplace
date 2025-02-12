"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

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
            onClick={handleLogout}

            variant="destructive"
            size="sm"
            className="rounded-outline p-3 hover:shadow-sm active:shadow-md gap-3"
        >
            <LogOut className="h-4 w-4" />
        </Button>
    );
};

export default LogoutButton;
