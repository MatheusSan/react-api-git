import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Logged from "../pages/logged";
import { AuthProvider, Context } from "../Context/AuthUser";
import api from "../services/api";

describe("Logged snapshot:", () => {
  it("Should render correctly", () => {
    const { container } = render(
      <AuthProvider>
        <Logged />
      </AuthProvider>
    );
    expect(container).toMatchSnapshot();
  });
});

jest.mock("../services/api");

const mockUser = {
  login: "DaviLemos",
  id: 48958244,
  node_id: "MDQ6VXNlcjQ4OTU4MjQ0",
  avatar_url: "https://avatars.githubusercontent.com/u/48958244?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/DaviLemos",
  html_url: "https://github.com/DaviLemos",
  followers_url: "https://api.github.com/users/DaviLemos/followers",
  following_url:
    "https://api.github.com/users/DaviLemos/following{/other_user}",
  gists_url: "https://api.github.com/users/DaviLemos/gists{/gist_id}",
  starred_url: "https://api.github.com/users/DaviLemos/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/DaviLemos/subscriptions",
  organizations_url: "https://api.github.com/users/DaviLemos/orgs",
  repos_url: "https://api.github.com/users/DaviLemos/repos",
  events_url: "https://api.github.com/users/DaviLemos/events{/privacy}",
  received_events_url: "https://api.github.com/users/DaviLemos/received_events",
  type: "User",
  site_admin: false,
  name: "Davi Teixeira",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 24,
  public_gists: 0,
  followers: 9,
  following: 7,
  created_at: "2019-03-26T15:35:51Z",
  updated_at: "2022-01-13T19:38:30Z",
};

const mockUserRenan = {
  login: "renanacosta",
  id: 36648528,
  node_id: "MDQ6VXNlcjM2NjQ4NTI4",
  avatar_url: "https://avatars.githubusercontent.com/u/36648528?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/renanacosta",
  html_url: "https://github.com/renanacosta",
  followers_url: "https://api.github.com/users/renanacosta/followers",
  following_url:
    "https://api.github.com/users/renanacosta/following{/other_user}",
  gists_url: "https://api.github.com/users/renanacosta/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/renanacosta/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/renanacosta/subscriptions",
  organizations_url: "https://api.github.com/users/renanacosta/orgs",
  repos_url: "https://api.github.com/users/renanacosta/repos",
  events_url: "https://api.github.com/users/renanacosta/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/renanacosta/received_events",
  type: "User",
  site_admin: false,
  name: "Renan Acosta",
  company: "IFRS campus Rio Grande",
  blog: "",
  location: null,
  email: null,
  hireable: true,
  bio: "Graduando em Análise e Desenvolvimento de Sistemas - IFRS \r\n\r\n Developer | Compass.Uol",
  twitter_username: null,
  public_repos: 5,
  public_gists: 0,
  followers: 8,
  following: 25,
  created_at: "2018-02-19T22:42:40Z",
  updated_at: "2022-01-19T01:28:35Z",
};

const mockRepos = [
  {
    id: 446856772,
    node_id: "R_kgDOGqJ-RA",
    name: "github-search",
    full_name: "renanacosta/github-search",
    private: false,
    owner: {
      login: "renanacosta",
      id: 36648528,
      node_id: "MDQ6VXNlcjM2NjQ4NTI4",
      avatar_url: "https://avatars.githubusercontent.com/u/36648528?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/renanacosta",
      html_url: "https://github.com/renanacosta",
      followers_url: "https://api.github.com/users/renanacosta/followers",
      following_url:
        "https://api.github.com/users/renanacosta/following{/other_user}",
      gists_url: "https://api.github.com/users/renanacosta/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/renanacosta/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/renanacosta/subscriptions",
      organizations_url: "https://api.github.com/users/renanacosta/orgs",
      repos_url: "https://api.github.com/users/renanacosta/repos",
      events_url: "https://api.github.com/users/renanacosta/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/renanacosta/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/renanacosta/github-search",
    description: "App de busca de repositórios do GitHub",
    fork: false,
    url: "https://api.github.com/repos/renanacosta/github-search",
    forks_url: "https://api.github.com/repos/renanacosta/github-search/forks",
    keys_url:
      "https://api.github.com/repos/renanacosta/github-search/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/renanacosta/github-search/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/renanacosta/github-search/teams",
    hooks_url: "https://api.github.com/repos/renanacosta/github-search/hooks",
    issue_events_url:
      "https://api.github.com/repos/renanacosta/github-search/issues/events{/number}",
    events_url: "https://api.github.com/repos/renanacosta/github-search/events",
    assignees_url:
      "https://api.github.com/repos/renanacosta/github-search/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/renanacosta/github-search/branches{/branch}",
    tags_url: "https://api.github.com/repos/renanacosta/github-search/tags",
    blobs_url:
      "https://api.github.com/repos/renanacosta/github-search/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/renanacosta/github-search/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/renanacosta/github-search/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/renanacosta/github-search/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/renanacosta/github-search/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/renanacosta/github-search/languages",
    stargazers_url:
      "https://api.github.com/repos/renanacosta/github-search/stargazers",
    contributors_url:
      "https://api.github.com/repos/renanacosta/github-search/contributors",
    subscribers_url:
      "https://api.github.com/repos/renanacosta/github-search/subscribers",
    subscription_url:
      "https://api.github.com/repos/renanacosta/github-search/subscription",
    commits_url:
      "https://api.github.com/repos/renanacosta/github-search/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/renanacosta/github-search/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/renanacosta/github-search/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/renanacosta/github-search/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/renanacosta/github-search/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/renanacosta/github-search/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/renanacosta/github-search/merges",
    archive_url:
      "https://api.github.com/repos/renanacosta/github-search/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/renanacosta/github-search/downloads",
    issues_url:
      "https://api.github.com/repos/renanacosta/github-search/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/renanacosta/github-search/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/renanacosta/github-search/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/renanacosta/github-search/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/renanacosta/github-search/labels{/name}",
    releases_url:
      "https://api.github.com/repos/renanacosta/github-search/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/renanacosta/github-search/deployments",
    created_at: "2022-01-11T14:35:08Z",
    updated_at: "2022-01-11T14:35:15Z",
    pushed_at: "2022-01-17T21:07:39Z",
    git_url: "git://github.com/renanacosta/github-search.git",
    ssh_url: "git@github.com:renanacosta/github-search.git",
    clone_url: "https://github.com/renanacosta/github-search.git",
    svn_url: "https://github.com/renanacosta/github-search",
    homepage: null,
    size: 1146,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 423042253,
    node_id: "R_kgDOGTcczQ",
    name: "project_react",
    full_name: "renanacosta/project_react",
    private: false,
    owner: {
      login: "renanacosta",
      id: 36648528,
      node_id: "MDQ6VXNlcjM2NjQ4NTI4",
      avatar_url: "https://avatars.githubusercontent.com/u/36648528?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/renanacosta",
      html_url: "https://github.com/renanacosta",
      followers_url: "https://api.github.com/users/renanacosta/followers",
      following_url:
        "https://api.github.com/users/renanacosta/following{/other_user}",
      gists_url: "https://api.github.com/users/renanacosta/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/renanacosta/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/renanacosta/subscriptions",
      organizations_url: "https://api.github.com/users/renanacosta/orgs",
      repos_url: "https://api.github.com/users/renanacosta/repos",
      events_url: "https://api.github.com/users/renanacosta/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/renanacosta/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/renanacosta/project_react",
    description:
      "Repositório do Projeto 2 do Programa de Bolsas Front End Compasso UOL",
    fork: false,
    url: "https://api.github.com/repos/renanacosta/project_react",
    forks_url: "https://api.github.com/repos/renanacosta/project_react/forks",
    keys_url:
      "https://api.github.com/repos/renanacosta/project_react/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/renanacosta/project_react/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/renanacosta/project_react/teams",
    hooks_url: "https://api.github.com/repos/renanacosta/project_react/hooks",
    issue_events_url:
      "https://api.github.com/repos/renanacosta/project_react/issues/events{/number}",
    events_url: "https://api.github.com/repos/renanacosta/project_react/events",
    assignees_url:
      "https://api.github.com/repos/renanacosta/project_react/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/renanacosta/project_react/branches{/branch}",
    tags_url: "https://api.github.com/repos/renanacosta/project_react/tags",
    blobs_url:
      "https://api.github.com/repos/renanacosta/project_react/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/renanacosta/project_react/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/renanacosta/project_react/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/renanacosta/project_react/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/renanacosta/project_react/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/renanacosta/project_react/languages",
    stargazers_url:
      "https://api.github.com/repos/renanacosta/project_react/stargazers",
    contributors_url:
      "https://api.github.com/repos/renanacosta/project_react/contributors",
    subscribers_url:
      "https://api.github.com/repos/renanacosta/project_react/subscribers",
    subscription_url:
      "https://api.github.com/repos/renanacosta/project_react/subscription",
    commits_url:
      "https://api.github.com/repos/renanacosta/project_react/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/renanacosta/project_react/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/renanacosta/project_react/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/renanacosta/project_react/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/renanacosta/project_react/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/renanacosta/project_react/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/renanacosta/project_react/merges",
    archive_url:
      "https://api.github.com/repos/renanacosta/project_react/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/renanacosta/project_react/downloads",
    issues_url:
      "https://api.github.com/repos/renanacosta/project_react/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/renanacosta/project_react/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/renanacosta/project_react/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/renanacosta/project_react/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/renanacosta/project_react/labels{/name}",
    releases_url:
      "https://api.github.com/repos/renanacosta/project_react/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/renanacosta/project_react/deployments",
    created_at: "2021-10-31T03:20:38Z",
    updated_at: "2021-11-09T03:00:26Z",
    pushed_at: "2021-11-09T02:14:29Z",
    git_url: "git://github.com/renanacosta/project_react.git",
    ssh_url: "git@github.com:renanacosta/project_react.git",
    clone_url: "https://github.com/renanacosta/project_react.git",
    svn_url: "https://github.com/renanacosta/project_react",
    homepage: "",
    size: 436,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: ["react", "reactjs"],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 448656376,
    node_id: "R_kgDOGr3z-A",
    name: "React-Login-Project",
    full_name: "renanacosta/React-Login-Project",
    private: false,
    owner: {
      login: "renanacosta",
      id: 36648528,
      node_id: "MDQ6VXNlcjM2NjQ4NTI4",
      avatar_url: "https://avatars.githubusercontent.com/u/36648528?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/renanacosta",
      html_url: "https://github.com/renanacosta",
      followers_url: "https://api.github.com/users/renanacosta/followers",
      following_url:
        "https://api.github.com/users/renanacosta/following{/other_user}",
      gists_url: "https://api.github.com/users/renanacosta/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/renanacosta/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/renanacosta/subscriptions",
      organizations_url: "https://api.github.com/users/renanacosta/orgs",
      repos_url: "https://api.github.com/users/renanacosta/repos",
      events_url: "https://api.github.com/users/renanacosta/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/renanacosta/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/renanacosta/React-Login-Project",
    description:
      "Para visualizar o projeto aqui, acesse o link: https://eduardo-sborges.github.io/React-Login-Project/",
    fork: true,
    url: "https://api.github.com/repos/renanacosta/React-Login-Project",
    forks_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/forks",
    keys_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/teams",
    hooks_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/hooks",
    issue_events_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/events",
    assignees_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/tags",
    blobs_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/languages",
    stargazers_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/stargazers",
    contributors_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/contributors",
    subscribers_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/subscribers",
    subscription_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/subscription",
    commits_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/merges",
    archive_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/downloads",
    issues_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/renanacosta/React-Login-Project/deployments",
    created_at: "2022-01-16T19:46:17Z",
    updated_at: "2022-01-10T17:31:14Z",
    pushed_at: "2021-11-29T17:33:52Z",
    git_url: "git://github.com/renanacosta/React-Login-Project.git",
    ssh_url: "git@github.com:renanacosta/React-Login-Project.git",
    clone_url: "https://github.com/renanacosta/React-Login-Project.git",
    svn_url: "https://github.com/renanacosta/React-Login-Project",
    homepage: "",
    size: 2231,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "build",
  },
  {
    id: 431315946,
    node_id: "R_kgDOGbVb6g",
    name: "React_Team_Project",
    full_name: "renanacosta/React_Team_Project",
    private: false,
    owner: {
      login: "renanacosta",
      id: 36648528,
      node_id: "MDQ6VXNlcjM2NjQ4NTI4",
      avatar_url: "https://avatars.githubusercontent.com/u/36648528?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/renanacosta",
      html_url: "https://github.com/renanacosta",
      followers_url: "https://api.github.com/users/renanacosta/followers",
      following_url:
        "https://api.github.com/users/renanacosta/following{/other_user}",
      gists_url: "https://api.github.com/users/renanacosta/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/renanacosta/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/renanacosta/subscriptions",
      organizations_url: "https://api.github.com/users/renanacosta/orgs",
      repos_url: "https://api.github.com/users/renanacosta/repos",
      events_url: "https://api.github.com/users/renanacosta/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/renanacosta/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/renanacosta/React_Team_Project",
    description: null,
    fork: true,
    url: "https://api.github.com/repos/renanacosta/React_Team_Project",
    forks_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/forks",
    keys_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/teams",
    hooks_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/hooks",
    issue_events_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/events",
    assignees_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/tags",
    blobs_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/languages",
    stargazers_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/stargazers",
    contributors_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/contributors",
    subscribers_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/subscribers",
    subscription_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/subscription",
    commits_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/merges",
    archive_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/downloads",
    issues_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/renanacosta/React_Team_Project/deployments",
    created_at: "2021-11-24T02:02:19Z",
    updated_at: "2021-11-24T02:02:20Z",
    pushed_at: "2021-10-31T03:33:25Z",
    git_url: "git://github.com/renanacosta/React_Team_Project.git",
    ssh_url: "git@github.com:renanacosta/React_Team_Project.git",
    clone_url: "https://github.com/renanacosta/React_Team_Project.git",
    svn_url: "https://github.com/renanacosta/React_Team_Project",
    homepage: null,
    size: 108,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 421279442,
    node_id: "R_kgDOGRw20g",
    name: "renanacosta",
    full_name: "renanacosta/renanacosta",
    private: false,
    owner: {
      login: "renanacosta",
      id: 36648528,
      node_id: "MDQ6VXNlcjM2NjQ4NTI4",
      avatar_url: "https://avatars.githubusercontent.com/u/36648528?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/renanacosta",
      html_url: "https://github.com/renanacosta",
      followers_url: "https://api.github.com/users/renanacosta/followers",
      following_url:
        "https://api.github.com/users/renanacosta/following{/other_user}",
      gists_url: "https://api.github.com/users/renanacosta/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/renanacosta/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/renanacosta/subscriptions",
      organizations_url: "https://api.github.com/users/renanacosta/orgs",
      repos_url: "https://api.github.com/users/renanacosta/repos",
      events_url: "https://api.github.com/users/renanacosta/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/renanacosta/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/renanacosta/renanacosta",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/renanacosta/renanacosta",
    forks_url: "https://api.github.com/repos/renanacosta/renanacosta/forks",
    keys_url:
      "https://api.github.com/repos/renanacosta/renanacosta/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/renanacosta/renanacosta/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/renanacosta/renanacosta/teams",
    hooks_url: "https://api.github.com/repos/renanacosta/renanacosta/hooks",
    issue_events_url:
      "https://api.github.com/repos/renanacosta/renanacosta/issues/events{/number}",
    events_url: "https://api.github.com/repos/renanacosta/renanacosta/events",
    assignees_url:
      "https://api.github.com/repos/renanacosta/renanacosta/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/renanacosta/renanacosta/branches{/branch}",
    tags_url: "https://api.github.com/repos/renanacosta/renanacosta/tags",
    blobs_url:
      "https://api.github.com/repos/renanacosta/renanacosta/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/renanacosta/renanacosta/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/renanacosta/renanacosta/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/renanacosta/renanacosta/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/renanacosta/renanacosta/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/renanacosta/renanacosta/languages",
    stargazers_url:
      "https://api.github.com/repos/renanacosta/renanacosta/stargazers",
    contributors_url:
      "https://api.github.com/repos/renanacosta/renanacosta/contributors",
    subscribers_url:
      "https://api.github.com/repos/renanacosta/renanacosta/subscribers",
    subscription_url:
      "https://api.github.com/repos/renanacosta/renanacosta/subscription",
    commits_url:
      "https://api.github.com/repos/renanacosta/renanacosta/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/renanacosta/renanacosta/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/renanacosta/renanacosta/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/renanacosta/renanacosta/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/renanacosta/renanacosta/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/renanacosta/renanacosta/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/renanacosta/renanacosta/merges",
    archive_url:
      "https://api.github.com/repos/renanacosta/renanacosta/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/renanacosta/renanacosta/downloads",
    issues_url:
      "https://api.github.com/repos/renanacosta/renanacosta/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/renanacosta/renanacosta/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/renanacosta/renanacosta/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/renanacosta/renanacosta/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/renanacosta/renanacosta/labels{/name}",
    releases_url:
      "https://api.github.com/repos/renanacosta/renanacosta/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/renanacosta/renanacosta/deployments",
    created_at: "2021-10-26T04:30:37Z",
    updated_at: "2022-01-10T17:31:41Z",
    pushed_at: "2022-01-18T13:01:45Z",
    git_url: "git://github.com/renanacosta/renanacosta.git",
    ssh_url: "git@github.com:renanacosta/renanacosta.git",
    clone_url: "https://github.com/renanacosta/renanacosta.git",
    svn_url: "https://github.com/renanacosta/renanacosta",
    homepage: null,
    size: 17,
    stargazers_count: 1,
    watchers_count: 1,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
];

const mockStarred = [
  {
    id: 54346799,
    node_id: "MDEwOlJlcG9zaXRvcnk1NDM0Njc5OQ==",
    name: "public-apis",
    full_name: "public-apis/public-apis",
    private: false,
    owner: {
      login: "public-apis",
      id: 51121562,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjUxMTIxNTYy",
      avatar_url: "https://avatars.githubusercontent.com/u/51121562?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/public-apis",
      html_url: "https://github.com/public-apis",
      followers_url: "https://api.github.com/users/public-apis/followers",
      following_url:
        "https://api.github.com/users/public-apis/following{/other_user}",
      gists_url: "https://api.github.com/users/public-apis/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/public-apis/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/public-apis/subscriptions",
      organizations_url: "https://api.github.com/users/public-apis/orgs",
      repos_url: "https://api.github.com/users/public-apis/repos",
      events_url: "https://api.github.com/users/public-apis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/public-apis/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/public-apis/public-apis",
    description: "A collective list of free APIs",
    fork: false,
    url: "https://api.github.com/repos/public-apis/public-apis",
    forks_url: "https://api.github.com/repos/public-apis/public-apis/forks",
    keys_url:
      "https://api.github.com/repos/public-apis/public-apis/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/public-apis/public-apis/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/public-apis/public-apis/teams",
    hooks_url: "https://api.github.com/repos/public-apis/public-apis/hooks",
    issue_events_url:
      "https://api.github.com/repos/public-apis/public-apis/issues/events{/number}",
    events_url: "https://api.github.com/repos/public-apis/public-apis/events",
    assignees_url:
      "https://api.github.com/repos/public-apis/public-apis/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/public-apis/public-apis/branches{/branch}",
    tags_url: "https://api.github.com/repos/public-apis/public-apis/tags",
    blobs_url:
      "https://api.github.com/repos/public-apis/public-apis/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/public-apis/public-apis/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/public-apis/public-apis/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/public-apis/public-apis/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/public-apis/public-apis/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/public-apis/public-apis/languages",
    stargazers_url:
      "https://api.github.com/repos/public-apis/public-apis/stargazers",
    contributors_url:
      "https://api.github.com/repos/public-apis/public-apis/contributors",
    subscribers_url:
      "https://api.github.com/repos/public-apis/public-apis/subscribers",
    subscription_url:
      "https://api.github.com/repos/public-apis/public-apis/subscription",
    commits_url:
      "https://api.github.com/repos/public-apis/public-apis/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/public-apis/public-apis/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/public-apis/public-apis/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/public-apis/public-apis/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/public-apis/public-apis/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/public-apis/public-apis/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/public-apis/public-apis/merges",
    archive_url:
      "https://api.github.com/repos/public-apis/public-apis/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/public-apis/public-apis/downloads",
    issues_url:
      "https://api.github.com/repos/public-apis/public-apis/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/public-apis/public-apis/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/public-apis/public-apis/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/public-apis/public-apis/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/public-apis/public-apis/labels{/name}",
    releases_url:
      "https://api.github.com/repos/public-apis/public-apis/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/public-apis/public-apis/deployments",
    created_at: "2016-03-20T23:49:42Z",
    updated_at: "2022-01-18T14:29:37Z",
    pushed_at: "2022-01-18T06:30:51Z",
    git_url: "git://github.com/public-apis/public-apis.git",
    ssh_url: "git@github.com:public-apis/public-apis.git",
    clone_url: "https://github.com/public-apis/public-apis.git",
    svn_url: "https://github.com/public-apis/public-apis",
    homepage: "",
    size: 4536,
    stargazers_count: 174778,
    watchers_count: 174778,
    language: "Python",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 20198,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 7,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    topics: [
      "api",
      "apis",
      "dataset",
      "development",
      "free",
      "list",
      "open-source",
      "public",
      "public-apis",
      "resources",
      "software",
    ],
    visibility: "public",
    forks: 20198,
    open_issues: 7,
    watchers: 174778,
    default_branch: "master",
  },
  {
    id: 421279442,
    node_id: "R_kgDOGRw20g",
    name: "renanacosta",
    full_name: "renanacosta/renanacosta",
    private: false,
    owner: {
      login: "renanacosta",
      id: 36648528,
      node_id: "MDQ6VXNlcjM2NjQ4NTI4",
      avatar_url: "https://avatars.githubusercontent.com/u/36648528?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/renanacosta",
      html_url: "https://github.com/renanacosta",
      followers_url: "https://api.github.com/users/renanacosta/followers",
      following_url:
        "https://api.github.com/users/renanacosta/following{/other_user}",
      gists_url: "https://api.github.com/users/renanacosta/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/renanacosta/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/renanacosta/subscriptions",
      organizations_url: "https://api.github.com/users/renanacosta/orgs",
      repos_url: "https://api.github.com/users/renanacosta/repos",
      events_url: "https://api.github.com/users/renanacosta/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/renanacosta/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/renanacosta/renanacosta",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/renanacosta/renanacosta",
    forks_url: "https://api.github.com/repos/renanacosta/renanacosta/forks",
    keys_url:
      "https://api.github.com/repos/renanacosta/renanacosta/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/renanacosta/renanacosta/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/renanacosta/renanacosta/teams",
    hooks_url: "https://api.github.com/repos/renanacosta/renanacosta/hooks",
    issue_events_url:
      "https://api.github.com/repos/renanacosta/renanacosta/issues/events{/number}",
    events_url: "https://api.github.com/repos/renanacosta/renanacosta/events",
    assignees_url:
      "https://api.github.com/repos/renanacosta/renanacosta/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/renanacosta/renanacosta/branches{/branch}",
    tags_url: "https://api.github.com/repos/renanacosta/renanacosta/tags",
    blobs_url:
      "https://api.github.com/repos/renanacosta/renanacosta/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/renanacosta/renanacosta/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/renanacosta/renanacosta/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/renanacosta/renanacosta/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/renanacosta/renanacosta/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/renanacosta/renanacosta/languages",
    stargazers_url:
      "https://api.github.com/repos/renanacosta/renanacosta/stargazers",
    contributors_url:
      "https://api.github.com/repos/renanacosta/renanacosta/contributors",
    subscribers_url:
      "https://api.github.com/repos/renanacosta/renanacosta/subscribers",
    subscription_url:
      "https://api.github.com/repos/renanacosta/renanacosta/subscription",
    commits_url:
      "https://api.github.com/repos/renanacosta/renanacosta/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/renanacosta/renanacosta/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/renanacosta/renanacosta/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/renanacosta/renanacosta/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/renanacosta/renanacosta/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/renanacosta/renanacosta/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/renanacosta/renanacosta/merges",
    archive_url:
      "https://api.github.com/repos/renanacosta/renanacosta/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/renanacosta/renanacosta/downloads",
    issues_url:
      "https://api.github.com/repos/renanacosta/renanacosta/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/renanacosta/renanacosta/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/renanacosta/renanacosta/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/renanacosta/renanacosta/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/renanacosta/renanacosta/labels{/name}",
    releases_url:
      "https://api.github.com/repos/renanacosta/renanacosta/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/renanacosta/renanacosta/deployments",
    created_at: "2021-10-26T04:30:37Z",
    updated_at: "2022-01-10T17:31:41Z",
    pushed_at: "2022-01-18T13:01:45Z",
    git_url: "git://github.com/renanacosta/renanacosta.git",
    ssh_url: "git@github.com:renanacosta/renanacosta.git",
    clone_url: "https://github.com/renanacosta/renanacosta.git",
    svn_url: "https://github.com/renanacosta/renanacosta",
    homepage: null,
    size: 17,
    stargazers_count: 1,
    watchers_count: 1,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "main",
  },
];

describe("Logged Components:", () => {
  describe("Without access", () => {
    it("Have message", () => {
      render(
        <AuthProvider>
          <BrowserRouter>
            <Logged />
          </BrowserRouter>
        </AuthProvider>
      );
      expect(screen.getByText("Maybe you need to")).toBeInTheDocument();
    });
    it("Redirect to login", () => {
      render(
        <AuthProvider>
          <BrowserRouter>
            <Logged />
          </BrowserRouter>
        </AuthProvider>
      );
      fireEvent.click(screen.getByText("login"));
      setTimeout(() => {
        expect(window.location.href).toEqual("http://localhost:3000");
      }, 1000);
    });
  });
  describe("With access", () => {
    const user = {
      id: "45019852",
      nodeId: "MDQ6VXNlcjQ1MDE5ODUy",
      displayName: "Matheus Santos",
      username: "MatheusSan",
      profileUrl: "https://github.com/MatheusSan",
      photos: [
        {
          value: "https://avatars.githubusercontent.com/u/45019852?v=4",
        },
      ],
      provider: "github",
      _raw: '{"login":"MatheusSan","id":45019852,"node_id":"MDQ6VXNlcjQ1MDE5ODUy","avatar_url":"https://avatars.githubusercontent.com/u/45019852?v=4","gravatar_id":"","url":"https://api.github.com/users/MatheusSan","html_url":"https://github.com/MatheusSan","followers_url":"https://api.github.com/users/MatheusSan/followers","following_url":"https://api.github.com/users/MatheusSan/following{/other_user}","gists_url":"https://api.github.com/users/MatheusSan/gists{/gist_id}","starred_url":"https://api.github.com/users/MatheusSan/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/MatheusSan/subscriptions","organizations_url":"https://api.github.com/users/MatheusSan/orgs","repos_url":"https://api.github.com/users/MatheusSan/repos","events_url":"https://api.github.com/users/MatheusSan/events{/privacy}","received_events_url":"https://api.github.com/users/MatheusSan/received_events","type":"User","site_admin":false,"name":"Matheus Santos","company":null,"blog":"","location":null,"email":null,"hireable":null,"bio":null,"twitter_username":null,"public_repos":11,"public_gists":0,"followers":1,"following":2,"created_at":"2018-11-13T23:21:23Z","updated_at":"2022-01-09T08:05:57Z"}',
      _json: {
        login: "MatheusSan",
        id: 45019852,
        node_id: "MDQ6VXNlcjQ1MDE5ODUy",
        avatar_url: "https://avatars.githubusercontent.com/u/45019852?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/MatheusSan",
        html_url: "https://github.com/MatheusSan",
        followers_url: "https://api.github.com/users/MatheusSan/followers",
        following_url:
          "https://api.github.com/users/MatheusSan/following{/other_user}",
        gists_url: "https://api.github.com/users/MatheusSan/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/MatheusSan/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/MatheusSan/subscriptions",
        organizations_url: "https://api.github.com/users/MatheusSan/orgs",
        repos_url: "https://api.github.com/users/MatheusSan/repos",
        events_url: "https://api.github.com/users/MatheusSan/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/MatheusSan/received_events",
        type: "User",
        site_admin: false,
        name: "Matheus Santos",
        company: null,
        blog: "",
        location: null,
        email: null,
        hireable: null,
        bio: null,
        twitter_username: null,
        public_repos: 11,
        public_gists: 0,
        followers: 1,
        following: 2,
        created_at: "2018-11-13T23:21:23Z",
        updated_at: "2022-01-09T08:05:57Z",
      },
    };
    const authenticated = true;
    it("Have Nickname", () => {
      render(
        <Context.Provider value={{ user, authenticated }}>
          <Logged />
        </Context.Provider>
      );
      expect(screen.getByText("MatheusSan")).toBeInTheDocument();
    });
    it("have two buttons", () => {
      render(
        <Context.Provider value={{ user, authenticated }}>
          <Logged />
        </Context.Provider>
      );
      expect(screen.getByRole("button", { name: "repos" })).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "starred" })
      ).toBeInTheDocument();
    });
    it("Have input", () => {
      render(
        <Context.Provider value={{ user, authenticated }}>
          <Logged />
        </Context.Provider>
      );
      expect(screen.getByPlaceholderText("User GitHub...")).toBeInTheDocument();
    });
    it("Have button logout", () => {
      render(
        <Context.Provider value={{ user, authenticated }}>
          <Logged />
        </Context.Provider>
      );
      expect(screen.getByTitle("logout")).toBeInTheDocument();
    });
    describe("Searchs", () => {
      it("Search user", () => {
        api.mockResolvedValue(mockUser);
        render(
          <Context.Provider value={{ user, authenticated }}>
            <Logged />
          </Context.Provider>
        );
        const input = screen.getByPlaceholderText("User GitHub...");
        fireEvent.change(input, { target: { value: "davilemos" } });
        fireEvent.submit(input);
        async function exp() {
          expect(await screen.findByText("Davi Teixeira")).toBeInTheDocument();
          expect(await screen.findByText("Davi Teixeira")).toHaveStyle({
            backgroundColor: "#000080",
            width: "95%",
            borderRadius: "5px",
          });
        }
        exp();
      });
      it("Search repositories", () => {
        api.get.mockImplementation((url) => {
          if (url === "/renanacosta") {
            return Promise.resolve(mockUserRenan);
          }
          if (url === "/renanacosta/repos") {
            return Promise.resolve(mockRepos);
          }
        });
        render(
          <Context.Provider value={{ user, authenticated }}>
            <Logged />
          </Context.Provider>
        );
        const input = screen.getByPlaceholderText("User GitHub...");
        fireEvent.change(input, { target: { value: "renanacosta" } });
        fireEvent.click(screen.getByRole("button", { name: "repos" }));
        async function exp() {
          expect(
            await screen.findByText("React_Team_Project")
          ).toBeInTheDocument();
        }
        exp();
      });
      it("Search starreds", () => {
        api.get.mockImplementation((url) => {
          if (url === "/renanacosta") {
            return Promise.resolve(mockUserRenan);
          }
          if (url === "/renanacosta/starred") {
            return Promise.resolve(mockStarred);
          }
        });
        render(
          <Context.Provider value={{ user, authenticated }}>
            <Logged />
          </Context.Provider>
        );
        const input = screen.getByPlaceholderText("User GitHub...");
        fireEvent.change(input, { target: { value: "renanacosta" } });
        fireEvent.click(screen.getByRole("button", { name: "starred" }));
        async function exp() {
          expect(await screen.findByText("public-apis")).toBeInTheDocument();
        }
        exp();
      });
      it("Search not repos", () => {
        api.get.mockImplementation((url) => {
          if (url === "/matheus") return Promise.reject(null);
          if (url === "/matheus/repos") return Promise.reject([]);
        });
        render(
          <Context.Provider value={{ user, authenticated }}>
            <Logged />
          </Context.Provider>
        );
        const input = screen.getByPlaceholderText("User GitHub...");
        fireEvent.change(input, { target: { value: "matheus" } });
        fireEvent.click(screen.getByRole("button", { name: "repos" }));
        async function exp() {
          expect(
            await screen.findByText("No results found")
          ).toBeInTheDocument();
        }
        exp();
      });
    });
  });
});
