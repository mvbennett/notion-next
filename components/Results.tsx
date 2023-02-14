import React from "react";
import ResultCard from "./ResultCard";

const Results = ({results}: any) => {
  return(
    <div className="results">
      {results.map((result: any) => {
        return <ResultCard result={result} key={result.title} />
      })}
    </div>
  );
};

export default Results;
