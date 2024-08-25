import { useEffect, useState } from "react";
import AuthForm from "../components/auth/auth-form";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/profile");
      } else {
        setIsLoading(false);
      }
    });

    if (isLoading) {
      return <p>Loading.....</p>;
    }
  }, [router]);
  return <AuthForm />;
}

export default AuthPage;
