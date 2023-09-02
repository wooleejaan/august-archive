/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData:
      '@use "libs/shared/styles/_utils.scss" as *; @use "libs/shared/styles/_mixin.scss" as *;',
  },
}

module.exports = nextConfig
