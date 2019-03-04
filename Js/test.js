describe("pow", function() {

    before(function() { alert("Начало тестов"); });
    after(function() { alert("Конец тестов"); });

    beforeEach(function() { alert("Вход в тест"); });
    afterEach(function() { alert("Выход из теста"); });

    it("возводит в n-ю степень", function() {
      assert.equal(pow(2, 3), 8);
    });

    it("при возведении 3 в 4ю степень равен 81", function() {
        assert.equal(pow(3, 4), 81);
    });

    describe("возводит x в степень n", function() {

        function makeTest(x) {
          var expected = x * x * x;
          it("при возведении " + x + " в степень 3 результат: " + expected, function() {
            assert.equal(pow(x, 3), expected);
          });
        }
    
        for (var x = 1; x <= 5; x++) {
          makeTest(x);
        }
    
    });
  
});