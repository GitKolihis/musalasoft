import chai from "chai"
import chaiHttp from "chai-http"
import server from "../server.js"

//defining assetion style
chai.should();
chai.use(chaiHttp)

describe('MUSALASOFT:: Testing all Devices Endpoints', ()=> {
    //testing fro POST Endpoint
    describe('Device Post Endpoint', ()=> {
        it('It should register a new device with respect to a gateway', (done)=> {
            chai.request(server)
            .post("/api/v1/musalasoft/device")
            .end((error, response)=> {
                response.should.have.status(200)
                done()
            })
        })

        it('It should not register a new device to the database because of wrong uri', (done) => {
            chai.request(server)
                .post("/api/v1/musalasoft/devices")
                .end((error, response) => {
                    response.should.have.status(404)
                    done()
                });
        })
    })

    //Testing for GET Endpoint
    describe('Device GET Endpoint', ()=> {
        it('It should all registered devices', (done)=> {
            chai.request(server)
            .get("/api/v1/musalasoft/device")
            .end((error, response)=> {
                response.should.have.status(404)
                done()
            })
        })

        it('It should not get all registered devices from the database because of wrong uri', (done) => {
            chai.request(server)
                .get("/api/v1/musalasoft/devices")
                .end((error, response) => {
                    response.should.have.status(404)
                    done()
                });
        })
    })
})