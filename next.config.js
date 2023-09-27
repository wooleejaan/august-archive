/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData:
      '@use "libs/_shared/styles/_utils.scss" as *; @use "libs/_shared/styles/_mixin.scss" as *;',
  },
}

module.exports = nextConfig
