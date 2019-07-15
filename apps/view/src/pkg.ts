const {
  PKG_VERSION = 'v0.0.0-version-error',
  PKG_REPOSITORY_URL = '',
  PKG_AUTHOR_NAME = '',
  PKG_AUTHOR_URL = '#',
} = process.env

const REPO_URL_MATCH = PKG_REPOSITORY_URL.match(/git\+(https:\/\/.+).git/)

export {
  PKG_VERSION as VERSION,
  PKG_AUTHOR_NAME as AUTHOR_NAME,
  PKG_AUTHOR_URL as AUTHOR_URL,
}

export const REPO_URL = REPO_URL_MATCH ? REPO_URL_MATCH[1] : '#'
export const CONTRIBUTORS_URL = `${REPO_URL}/graphs/contributors`
export const PRIVACY_URL = `${REPO_URL}/blob/v${PKG_VERSION}/PRIVACY.md`
