export const VERSION = process.env.PKG_VERSION || 'v0.0.0-version-error'
export const AUTHOR_NAME = process.env.PKG_AUTHOR_NAME || ''
export const AUTHOR_URL = process.env.PKG_AUTHOR_URL || '#'

const REPO_GIT_URL = process.env.PKG_REPOSITORY_URL || ''
const REPO_URL_MATCH = REPO_GIT_URL.match(/git\+(https:\/\/.+).git/)

export const REPO_URL = REPO_URL_MATCH ? REPO_URL_MATCH[1] : '#'
export const CONTRIBUTORS_URL = `${REPO_URL}/graphs/contributors`
export const PRIVACY_URL = `${REPO_URL}/blob/v${VERSION}/PRIVACY.md`
