// Release and activity facts for a GitHub repository, looked up when the site
// builds so each deploy shows current values. The build must not depend on
// GitHub answering (unauthenticated calls are rate-limited), so any failure
// falls back to the values the snapshot script last recorded.
export interface RepoFacts {
  release: string;
  releasedAt: string; // YYYY-MM-DD
  pushedAt: string; // YYYY-MM-DD
  license: string;
}

const lookups = new Map<string, Promise<RepoFacts>>();

export function repoFacts(repo: string, fallback: RepoFacts): Promise<RepoFacts> {
  // one lookup per repository per build, however many components ask
  let lookup = lookups.get(repo);
  if (!lookup) {
    lookup = fetchFacts(repo, fallback).catch(() => fallback);
    lookups.set(repo, lookup);
  }
  return lookup;
}

async function fetchFacts(repo: string, fallback: RepoFacts): Promise<RepoFacts> {
  const get = async (path: string) => {
    const res = await fetch(`https://api.github.com/repos/${repo}${path}`, {
      headers: { Accept: "application/vnd.github+json" },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    return res.json();
  };
  const [info, latest] = await Promise.all([get(""), get("/releases/latest")]);
  return {
    release: latest.tag_name,
    releasedAt: latest.published_at.slice(0, 10),
    pushedAt: info.pushed_at.slice(0, 10),
    license: info.license?.spdx_id ?? fallback.license,
  };
}
