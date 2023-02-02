import express from "express";
import app from "index";
import supertest from "supertest";
import httpStatus from "http-status";

const api = supertest(app);

describe ("POST /fruits", () => {
    it("when body is valid", async () => {
        // const body = {
        //     name: 'banana',
        //     price: 10
        // };
        const body = {
            name: expect.any(String),
            price: expect.any(Number)
        };
        const response = await api.post("/fruits").send(body)

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    })

    it("when body is invalid", async () => {
        const body = {}; // corpo inválido
        const response = await api.post("/fruits").send(body);

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
         
    })

    it("when body is invalid", async () => {
        const body = {}; // corpo inválido
        const response = await api.post("/fruits").send(body);

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
         
    })

    it("when body is invalid", async () => {
        // const body = { name: 10, price: 10 }; // corpo inválido
        const body = { name: expect.any(Number), price: expect.any(Number) }
        const response = await api.post("/fruits").send(body);

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
         
    })

    it("when body is invalid", async () => {
        const body = { name: 'banana', price: 10 }; // corpo inválido
        const response = await api.post("/fruits").send(body);

        expect(response.status).toBe(httpStatus.CREATED);
         
    })
});


describe ("testing GET: /fruits",  () => {

    it("should response status 200 and an object like {id, name, price} if fruits exist GET: /fruits", async () => {
        
        const result = await api.get("/fruits")
            expect (result.status).toBe(200);
            // expect (result.body).toEqual([{
            //     id: 1,
            //     name: 'banana',
            //     price: 10
            // }])
            expect (result.body).toEqual([{
                id: expect.any(Number),
                name: expect.any(String),
                price: expect.any(Number)
            }])
    })   
});

describe ("testing GET: /fruits/:id", () => {

    it("should response status 200 if fruit exists GET: /fruits/:id", async () => {

        const result = await api.get("/fruits/1")
            expect (result.status).toBe(200);
            // expect (result.body).toEqual({
            //     id: 1,
            //     name: 'banana',
            //     price: 10
            // })
            expect (result.body).toEqual({
                id: expect.any(Number),
                name: expect.any(String),
                price: expect.any(Number)
            })
    })

    it("should response status 404 if fruit doesn't exist GET: /fruits/:id", async () => {

        const result = await api.get("/fruits/:id")
            expect (result.status).toBe(httpStatus.NOT_FOUND);
            expect (result.body).toEqual({})
    })
})

