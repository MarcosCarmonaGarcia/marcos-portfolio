export async function getRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);

  if (!res.ok) {
    throw new Error("Error fetching GitHub repos");
  }

  const repos = await res.json();

  return repos.map((repo: any) => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    language: repo.language
  }));
}