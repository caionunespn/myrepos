import React from "react";
import { Repository } from "../../store/ducks/repositories/types";

interface Props {
  repository: Repository;
}

const RepositoryItem: React.FC<Props> = ({ repository }) => {
  return (
    <a
      href={`https://github.com/caionunespn/${repository.name}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <li>{repository.name}</li>
    </a>
  );
};

export default RepositoryItem;
