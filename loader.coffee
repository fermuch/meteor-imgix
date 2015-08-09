if Meteor.isServer
  imgix = Npm.require('imgix-core-js')
else
  window.imgix = imgix