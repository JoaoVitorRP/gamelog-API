import { QueryResult } from "pg";
import { connection } from "../database/db.js";
import { ReviewerEntity, ReviewerId } from "../protocols";

function insertReviewer(name: string): Promise<QueryResult<ReviewerId>> {
  return connection.query(
    `
    INSERT INTO
        reviewers(name)
    VALUES
        ($1)
    RETURNING
      id;
    `,
    [name]
  );
}

function getReviewers(): Promise<QueryResult<ReviewerEntity>> {
  return connection.query(
    `
    SELECT
        id, name
    FROM
        reviewers;
    `
  );
}

export const reviewersRepository = {
  insertReviewer,
  getReviewers,
};