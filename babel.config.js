module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'elemtn-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
