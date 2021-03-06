import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = localStorage.getItem("token");

      if (!accessToken) {
        Router.replace("/");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props
      return <WrappedComponent {...props} />;
    }
    // If we are on server, return null
    return null;
  };
};

export default withAuth;
