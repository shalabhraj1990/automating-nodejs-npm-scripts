const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

const app = require("../index.js");

describe("GET", function () {
  it("should return with a meddage the server is running", function (done) {
    chai
      .request(app)
      .get("/")
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.text).to.equal(
          "server is running on port 3000 watch mode on"
        );
        return done();
      });
  });
});
