import React, { useEffect } from "react";
import RepositoryItem from "../RepositoryItem";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import { Repository } from "../../store/ducks/repositories/types";
import * as RepositoryActions from "../../store/ducks/repositories/actions";

interface StateProps {
  repositories: Repository[];
}

const RepositoryList: React.FC = () => {
  const { repositories } = useSelector<ApplicationState, StateProps>(
    (state) => ({
      repositories: state.repositories.data,
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RepositoryActions.loadRequest());
  }, [dispatch]);

  return (
    <>
      <h5>My repositories</h5>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </>
  );
};

export default RepositoryList;
