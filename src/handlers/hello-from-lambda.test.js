const hello_from_lambda = require("./hello-from-lambda")
// @ponicode
describe("hello_from_lambda.helloFromLambdaHandler", () => {
    test("0", async () => {
        await hello_from_lambda.helloFromLambdaHandler()
    })
})
