import chai from "chai"
import chaiHttp from "chai-http"
import server from "../server.js"

//defining asertion style
chai.should();
chai.use((chaiHttp));

describe(
    'Testing All Gateways Endpoints', () => {
        //Test for POST Operation
        describe('Gateway Post Endpoint', () => {
            it('It should register a new gateway device into the database', (done) => {
                chai.request(server)
                    .post("/api/v1/musalasoft/gateway")
                    .end((error, response) => {
                        response.should.have.status(200)
                        done()
                    });
            })

            it('It should not register a new gateway device into the database because of wrong uri', (done) => {
                chai.request(server)
                    .post("/api/v1/musalasoft/gateways")
                    .end((error, response) => {
                        response.should.have.status(404)
                        done()
                    });
            })
        })

        //Test for GET operation
        describe('Gateway GET Endpoint', () => {
            it('It should get all registered gateways from the database', (done) => {
                chai.request(server)
                    .get("/api/v1/musalasoft/gateway")
                    .end((error, response) => {
                        response.should.have.status(200)
                        response.body.should.be.a('object')
                        response.body.status.should.equal('success')
                        done()
                    });
            })

            it('It should not get all registered gateways from the database because of wrong uri', (done) => {
                chai.request(server)
                    .get("/api/v1/musalasoft/gateways")
                    .end((error, response) => {
                        response.should.have.status(404)
                        done()
                    });
            })
        })

        //Tess for 
    }
)