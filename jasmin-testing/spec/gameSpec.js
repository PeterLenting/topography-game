describe("button function", function() {
    describe("hintButton function", function() {
        it("should replace '-empty.png' with '-flag.png' in html-elements with ID newImage", function() {
            functionGiveHint()
            expect($("#newImage").attr('src')).toContain("-flag.png");
        });
        it("should replace '-empty.png' with '-flag.png' in html-elements with ID newImageBack", function() {
            functionGiveHint()
            expect($("#newImage").attr('src')).toContain("-flag.png");
        });
    });
});

describe("button function", function() {
    describe("startGame function", function() {
        it("should remove class 'hidden' from html-elements with ID textField", function() {
            functionStartGame();
            expect($('#textField')).not.toHaveClass('hidden');
        });
    });
});

describe("button function", function() {
    describe("giveHint function", function() {
        it("should add class 'gotHint' to html-elements with ID newImage", function() {
            functionGiveHint();
            expect($('#newImage')).toHaveClass('gotHint');
        });
    });
});