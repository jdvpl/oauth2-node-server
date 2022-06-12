module.exports = (router, app, testAPIService) => {
  router.post("/hello", app.oauth.authorise(), testAPIService.helloWorld);
  router.post("/saitama", app.oauth.authorise(), testAPIService.saitama);

  return router;
};