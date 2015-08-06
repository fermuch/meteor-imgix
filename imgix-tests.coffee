if Meteor.isClient
  Tinytest.add 'imgix is available in the client', (test) ->
    test.isNotUndefined window.imgix, 'imgix exists'
    test.isNotUndefined $.imgix, 'imgix for jquery exists'

if Meteor.isServer
  Tinytest.add 'imgix is available in the server', (test) ->
    test.isNotUndefined imgix, 'imgix exists'