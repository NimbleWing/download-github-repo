import Download from 'download';

function normalize($string) {
  const owner = $string.split('/')[0];
  let name = $string.split('/')[1];
  let branch = 'main';
  if (name.includes('#')) {
    [name, branch] = name.split('#');
  }
  return {
    owner,
    name,
    branch,
  };
}
function github($repo) {
  const { name, owner, branch } = $repo;
  return `https://github.com/${owner}/${name}/archive/${branch}.zip`;
}
async function fetch($repo, $destination) {
  const url = github(normalize($repo));
  try {
    await Download(url, $destination, { extract: true, strip: 1 });
  } catch ($err) {
    switch ($err.statusCode) {
      case 404:
        throw new Error('not found');
      default:
        throw new Error($err.message);
    }
  }
}
export default fetch;
