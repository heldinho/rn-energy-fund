import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export const useProtectedRoute = (user) => {
  const rootSegment = useSegments()[0];
  const router = useRouter();

  useEffect(() => {
    // If the user is not signed in and the initial segment is not anything in the auth group.
    if (!user.username || (!user.password && rootSegment !== "(auth)")) {
      router.replace("/sign-in");
    } else if (user.username && user.password && rootSegment !== "(app)") {
      router.replace("/home");
    }
  }, [user, rootSegment]);
};
