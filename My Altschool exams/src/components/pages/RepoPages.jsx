import { useEffect, useState } from "react";
import Repo from "../UI/Repo";
import { useRepoContext } from "../context/ReposContext";

function RepoPages() {
  const { repos } = useRepoContext();
  const [showRepo, setShowRepo] = useState(6);
  const [pageNumber, setPageNumber] = useState(1);
  const [start, setStart] = useState(0);
  const [showEnd, setShowEnd] = useState(6);
  const [displayRepo, setDisplayRepo] = useState([]);

  function handleNextPage() {
    if (repos.length > showRepo) {
      setStart((prev) => (prev += 6));
      setShowEnd((prev) => (prev += 6));
      setShowRepo((prev) => (prev += 6));
      setPageNumber((prev) => (prev += 1));
    }
  }

  function handlePrevPage() {
    if (showRepo === 6) return;
    setStart((prev) => (prev -= 6));
    setShowEnd((prev) => (prev -= 6));
    setShowRepo((prev) => (prev -= 6));
    setPageNumber((prev) => (prev -= 1));
  }

  useEffect(() => {
    setDisplayRepo(repos.slice(start, showEnd));
  }, [repos, start, showEnd]);

  return (
    <div className=" w-[100%] flex flex-col items-start">
      <div className="hero-repo">
        <section className="intro flex flex-col xl:flex-row items-start xl:items-end">
          <p className="sm:w-[60%] lg:w-[70%] xl:w-[40%] text-5xl xl:text-6xl text-mainBlack font-semibold  xl:mb-0 ">
           MY GITHUB REPOSITORIES
          </p>
        </section>

        <div className="down-icon text-6xl text-mainGray mt-5 mb-36 cursor-pointer">
          ↓
        </div>

      </div>

      <section className="repos flex flex-wrap w-[100%] gap-6 justify-center mb-10 pt-10">
        
        {displayRepo?.map((repo, index) => {
          return <Repo key={repo.id} repo={repo} index={(index += 1)} />;
        })}
      </section>

      <div className="pagination flex gap-5 mb-10 self-center items-center">
        <button
          className="bg-mainBlack w-8 h-8 rounded-2xl flex items-center justify-center font-bold text-2xl text-[#ccc] cursor-pointer"
          onClick={() => handlePrevPage()}
        >
          &lt;
        </button>
        <span>{pageNumber}</span>
        <button
          className="bg-mainBlack w-8 h-8 rounded-2xl flex items-center justify-center font-bold text-2xl text-[#ccc] cursor-pointer"
          onClick={() => handleNextPage()}
        >
          &gt;
        </button>
       
      </div>
      <div className="pagination flex gap-5 mb-10 self-center items-center">
        <button
          className="mt-10 rounded-2xl  items-center justify-center font-bold text-2xl cursor-pointer px-4  py-2 block text-white bg-blue-400 border-l" onClick={""}
        >
          Create New Repository
        </button>
      </div>
    </div>
    
  );
}

export default RepoPages;
