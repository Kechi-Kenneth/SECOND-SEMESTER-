import { createContext, useContext, useEffect, useState } from "react";

const RepoContext = createContext();

function RepoContextProvider({ children }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kechi-kenneth/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);
  return (
    <RepoContext.Provider value={{ repos }}>{children}</RepoContext.Provider>
  );
}

function useRepoContext() {
  const values = useContext(RepoContext);
  if (!values)
    throw new Error(
      "Repo context has been used outside of repoContext provider"
    );
  return values;
}

export { useRepoContext, RepoContextProvider };
