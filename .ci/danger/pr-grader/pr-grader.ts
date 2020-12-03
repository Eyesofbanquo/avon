import { message, danger, warn, fail, markdown } from "danger";

const commits = danger.github.commits;

const setupCommits = commits.find((commit) =>
  commit.commit.message.includes("🔓")
);
const actionCommits = commits.find((commit) =>
  commit.commit.message.includes("🎬")
);
const testCommits = commits.find((commit) =>
  commit.commit.message.includes("🔒")
);

export const grader = () => {
  if (setupCommits) {
    warn(
      "Missing a commit indicating the setup for this PR. Please include commit with 🔓 in the title next time."
    );
  }
  if (actionCommits) {
    warn(
      "Missing a commit indicating the action for this PR. Please include commit with 🎬 in the title next time."
    );
  }
  if (testCommits) {
    warn(
      "Missing a commit indicating the test for this PR. Please include commit with 🔒 in the title next time."
    );
  }
};
