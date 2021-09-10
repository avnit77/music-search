import React, { useContext } from "react";
// import Breadcrumb from '../../features/Breadcrumb'
import { ResultsContext } from "../wrappers/ResultsContext";
import Lyrics from "../features/results/Lyrics";
import Title from "../features/results/Title";
import Release from "../features/results/Release";
import Artist from "../features/results/Artist";

const Results = () => {
  const { artist, release, title, lyrics, artists, releases, titles } =
    useContext(ResultsContext);

  const results = artist ? (
    release ? (
      title ? (
        <Lyrics lyrics={lyrics} artist={artist} />
      ) : (
        titles.map((title) => (
          <Title
            song={title}
            link={`/${artist.replace("/", "%2F")}/${release.replace(
              "/",
              "%2F"
            )}/${title.title}`}
          />
        ))
      )
    ) : (
      releases.map((release) => (
        <Release
          release={release}
          link={`/${artist.replace("/", "%2F")}/${release.title.replace(
            "/",
            "%2F"
          )}`}
        />
      ))
    )
  ) : (
    artists.map((artist) => <Artist artist={artist} />)
  );

  return (
    <div className="results">
      <h2 className="title is-size-3">
        {artist ? (release ? (title ? title : release) : artist) : ""}
      </h2>
      <ul>{results}</ul>
    </div>
  );
};
export default Results;
