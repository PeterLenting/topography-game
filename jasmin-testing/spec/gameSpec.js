describe("button function", function() {
    describe("hintButton function", function() {
        it("should replace '-empty.png' with '-flag.png' in html-elements with ID newImage", function() {
        functionGiveHint()
        expect($("#newImageBack").attr('src')).toBe("-flag.png");
        });
    });
});