import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function RepoDetail() {
  const repository = useParams();
  const navigate = useNavigate();
  const repositoryId = repository?.id;

  const [repoDetails, setRepoDetails] = useState({});
  const [repoLanguages, setRepoLanguages] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/repositories/${repositoryId}`)
      .then((response) => response.json())
      .then((data) => setRepoDetails(data));
  }, [repositoryId]);

  useEffect(() => {
    fetch(`${repoDetails.languages_url}`)
      .then((response) => response.json())
      .then((data) => setRepoLanguages(Object?.keys(data)));
  }, [repoDetails]);

  function dateFormat(dateInput = "2023-03-02T14:07:21Z") {
    const date = new Date(dateInput);

    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  }

  return (
    <div className="flex w-[100%] justify-between pb-28 mb-28  relative">
      <section className="repoTexts flex flex-col xl:w-[60%]">
        <p className="project-title text-3xl md:text-4xl xl:text-6xl text-mainBlack font-bold mb-4">
          {repoDetails?.name?.split("-")?.join(" ").toUpperCase()}
        </p>
        <p className="project-desc text-lg xl:text-3xl text-mainBlack font-medium mb-7">
          {repoDetails?.description ||
            "A short description of what the project is about"}
        </p>
        <div className="extra-desc-container flex flex-col gap-2 mt-5">
          <p className="extra-desc text-mainGray">
            <span className="font-bold text-mainBlack text-lg"> Created: </span>
            <span className="pl-2 font-medium">
              {dateFormat(repoDetails?.created_at)}
            </span>
          </p>
          <p className="extra-desc text-mainGray">
            <span className="font-bold text-mainBlack text-lg"> GitHub URL: </span>
            <span className="pl-2 font-medium">{repoDetails?.html_url}</span>
          </p>
          <p className="languages text-mainGray">
            <span className="font-bold text-mainBlack text-lg">Languages: </span>
            {Array.isArray(repoLanguages) &&
              repoLanguages.map((eachLang) => (
                <span className="pl-2 font-medium" key={eachLang}>
                  • {eachLang}
                </span>
              ))}
          </p>
          <button onClick={() => navigate(-1)} className="flex mt-9 bg-secondary w-fit text-white text-lg font-semibold px-6 py-2 rounded-3xl">
            &lt; Back
          </button>
        </div>

      </section>
    </div>
  );
}

export default RepoDetail;
