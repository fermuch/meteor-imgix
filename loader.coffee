if Meteor.isServer
  imgix = Npm.require('imgix-core-js')
else
  imgix = imgix